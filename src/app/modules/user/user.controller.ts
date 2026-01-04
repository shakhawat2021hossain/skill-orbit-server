import type { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { StatusCodes } from "http-status-codes";
import { userServices } from "./user.service.js";
import type { JwtPayload } from "jsonwebtoken";
import { paginate, type IOtherParams } from "../../utils/pagination.js";
import type { Role } from "../auth/auth.interface.js";
import { Role as RoleEnum } from "../auth/auth.interface.js";

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
	const {
		// page = 1,
		// limit = 10,
		// sortBy = "createdAt",
		// sortOrder = "asc",
		search = "",
		role
	} = req.query;


	const queryParams = paginate(req.query)

	const otherParams: IOtherParams = {
		searchTerm: String(search)
	};

	if (Object.values(RoleEnum).includes(role as Role)) {
		otherParams.role = role as Role;
	}

	const { users, meta } = await userServices.getAllUsers(queryParams, otherParams);

	sendResponse(res, {
		data: users,
		meta,
		success: true,
		message: "Retrieved all users successfully!",
		statusCode: StatusCodes.OK
	});
});

const getUserById = catchAsync(async (req: Request, res: Response) => {
	const result = await userServices.getUserById(req.params.userId as string);

	sendResponse(res, {
		data: result,
		success: true,
		message: "Retrieved user successfully!",
		statusCode: StatusCodes.OK
	});
});

const getMyProfile = catchAsync(async (req: Request, res: Response) => {
	const userId = req.user?.userId as string;
	const result = await userServices.getUserById(userId);

	sendResponse(res, {
		data: result,
		success: true,
		message: "Retrieved profile successfully!",
		statusCode: StatusCodes.OK
	});
});


const updateMyProfile = catchAsync(async (req: Request, res: Response) => {
	// const userId = req.user?.userId as string;
	const result = await userServices.updateMyProfile(req.params?.id as string, req.body, req?.user as JwtPayload);

	sendResponse(res, {
		data: result,
		success: true,
		message: "Updated profile successfully!",
		statusCode: StatusCodes.OK
	});
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
	const result = await userServices.updateUser(req.params.userId as string, req.body);

	sendResponse(res, {
		data: result,
		success: true,
		message: "Updated user successfully!",
		statusCode: StatusCodes.OK
	});
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
	await userServices.deleteUser(req.params.userId as string);

	sendResponse(res, {
		data: null,
		success: true,
		message: "User deleted successfully!",
		statusCode: StatusCodes.OK
	});
});


const getInstructorDetails = catchAsync(async (req: Request, res: Response) => {
	const result = await userServices.getInstructorDetails(req.user?.userId as string);

	sendResponse(res, {
		data: result,
		success: true,
		message: "Retreived instructor details successfully!",
		statusCode: StatusCodes.OK
	});


});



export const userControllers = {
	getAllUsers,
	getUserById,
	getMyProfile,
	updateMyProfile,
	updateUser,
	deleteUser,
	getInstructorDetails
};

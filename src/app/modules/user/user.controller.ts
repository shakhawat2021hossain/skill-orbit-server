import type { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { StatusCodes } from "http-status-codes";
import { userServices } from "./user.service.js";

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
	const result = await userServices.getAllUsers();

	sendResponse(res, {
		data: result,
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

export const userControllers = {
	getAllUsers,
	getUserById,
	getMyProfile,
	updateUser,
	deleteUser
};

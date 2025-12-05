import type { IUser } from "../auth/auth.interface.js";
import { User } from "../auth/auth.model.js";
import AppError from "../../utils/appError.js";
import { StatusCodes } from "http-status-codes";


const getAllUsers = async () => {
	const users = await User.find({ isDeleted: false }).select('-password');
	return users;
}

const getUserById = async (userId: string) => {
	const user = await User.findById(userId).select('-password');
	if (!user) {
		throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
	}
	return user;
}

const updateUser = async (userId: string, payload: Partial<IUser>) => {
	const updated = await User.findByIdAndUpdate(userId, payload, { new: true }).select('-password');
	if (!updated) {
		throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
	}
	return updated;
}

const deleteUser = async (userId: string) => {
	const deleted = await User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
	if (!deleted) {
		throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
	}
	return deleted;
}


export const userServices = {
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser
}

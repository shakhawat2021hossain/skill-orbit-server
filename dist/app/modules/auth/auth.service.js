import AppError from "../../utils/appError.js";
import { User } from "./auth.model.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import { generateTokens } from "../../utils/jwt.js";
const register = async (payload) => {
    console.log(payload);
    const { email, password, name, ...rest } = payload;
    const isExist = await User.findOne({ email: email });
    if (isExist) {
        throw new AppError(StatusCodes.BAD_REQUEST, "User ALready exist");
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const userData = {
        email,
        password: hashedPass,
        name,
        ...rest
    };
    const user = await User.create(userData);
    return user;
};
const credentialLogin = async (payload) => {
    const isExist = await User.findOne({ email: payload.email });
    console.log(isExist);
    if (!isExist) {
        throw new AppError(StatusCodes.NOT_FOUND, "Invalid credentials");
    }
    const isMatched = await bcrypt.compare(payload.password, isExist.password);
    if (!isMatched) {
        throw new AppError(StatusCodes.BAD_REQUEST, "Invalid Credentials");
    }
    const tokens = await generateTokens(isExist);
    const user = isExist.toObject();
    // delete user.password
    return {
        user,
        token: tokens.accessToken,
        refreshToken: tokens.refreshToken,
    };
};
export const authServices = {
    register,
    credentialLogin
};
//# sourceMappingURL=auth.service.js.map
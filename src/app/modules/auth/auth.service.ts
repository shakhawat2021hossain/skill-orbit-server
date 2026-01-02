import AppError from "../../utils/appError.js"
import type { IUser } from "./auth.interface.js"
import { User } from "./auth.model.js"
import { StatusCodes } from "http-status-codes"
import bcrypt from "bcrypt"
import { generateTokens, verifyToken } from "../../utils/jwt.js"
import jwt, { type JwtPayload } from "jsonwebtoken"
import { envVars } from "../../config/envVars.js"
import { sendEmail } from "../../utils/sendEmail.js"

const register = async (payload: IUser) => {
    console.log(payload)
    const { email, password, name, ...rest } = payload
    const isExist = await User.findOne({ email: email })
    if (isExist) {
        throw new AppError(StatusCodes.BAD_REQUEST, "User ALready exist")
    }

    const hashedPass = await bcrypt.hash(password as string, 10)

    const userData = {
        email,
        password: hashedPass,
        name,
        ...rest
    }

    const user = await User.create(userData)
    return user

}

const credentialLogin = async (payload: Partial<IUser>) => {
    const isExist = await User.findOne({ email: payload.email as string })
    console.log(isExist)
    if (!isExist) {
        throw new AppError(StatusCodes.NOT_FOUND, "Invalid credentials")
    }

    const isMatched = await bcrypt.compare(payload.password as string, isExist.password)
    if (!isMatched) {
        throw new AppError(StatusCodes.BAD_REQUEST, "Invalid Credentials")
    }


    const tokens = await generateTokens(isExist)
    const user = isExist.toObject()

    // delete user.password

    return {
        user,
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
    }

}


const forgotPassword = async (email: string) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new AppError(StatusCodes.BAD_REQUEST, "User does not exist")
    }
    if (user.isBlocked) {
        throw new AppError(StatusCodes.BAD_REQUEST, "User is Blocked")
    }

    if (user.isDeleted) {
        throw new AppError(StatusCodes.BAD_REQUEST, "User is deleted")
    }

    const jwtPayload = {
        userId: user._id,
        email: user.email,
        role: user.role
    }

    const resetToken = jwt.sign(jwtPayload, envVars.FORGOT_PASS_TOKEN_SECRET, {
        expiresIn: "10m"
    })

    const resetURL = `${envVars.FRONTEND_URL}/reset-password?id=${user._id}&token=${resetToken}`

    sendEmail({
        to: user.email,
        subject: "Password Reset",
        html:
            `
                <div>
                    <p>Dear User,</p>
                    <p>Your password reset link 
                        <a href=${resetURL}>
                            <button>
                                Reset Password
                            </button>
                        </a>
                    </p>

                </div>
            `
    })

    return resetURL

    /**
     * http://localhost:5173/reset-password?id=687f310c724151eb2fcf0c41&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODdmMzEwYzcyNDE1MWViMmZjZjBjNDEiLCJlbWFpbCI6InNhbWluaXNyYXI2QGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzUzMTY2MTM3LCJleHAiOjE3NTMxNjY3Mzd9.LQgXBmyBpEPpAQyPjDNPL4m2xLF4XomfUPfoxeG0MKg
     */

}

const resetPassword = async (
    token: string,
    payload: { id: string; newPassword: string }
) => {

    const decoded: JwtPayload = await verifyToken(
        token,
        envVars.FORGOT_PASS_TOKEN_SECRET
    );
    console.log(decoded)

    if (!decoded?.userId) {
        throw new AppError(StatusCodes.FORBIDDEN, "Invalid or expired token");
    }

    if (decoded.userId !== payload.id) {
        throw new AppError(StatusCodes.FORBIDDEN, "Unauthorized access");
    }

    const user = await User.findById(payload.id);
    if (!user) {
        throw new AppError(StatusCodes.BAD_REQUEST, "User does not exist");
    }

    if (payload.newPassword.length < 6) {
        throw new AppError(
            StatusCodes.BAD_REQUEST,
            "Password must be at least 6 characters long"
        );
    }

    const hashedPassword = await bcrypt.hash(payload.newPassword, 10);

    // 6. update password
    user.password = hashedPassword;
    await user.save();
};





export const authServices = {
    register,
    credentialLogin,
    forgotPassword,
    resetPassword
}

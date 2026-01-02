import nodemailer from "nodemailer";
import { envVars } from "../config/envVars.js";
import AppError from "./appError.js";

const transporter = nodemailer.createTransport({
    secure: false,
    auth: {
        user: envVars.EMAIL_SENDER?.SMTP_USER,
        pass: envVars.EMAIL_SENDER.SMTP_PASS
    },
    port: Number(envVars.EMAIL_SENDER.SMTP_PORT),
    host: envVars.EMAIL_SENDER.SMTP_HOST,
    tls: {
        rejectUnauthorized: false
    }
})

interface SendEmailOptions {
    to: string,
    subject: string;
    html: string;
}

export const sendEmail = async ({
    to,
    subject,
    html
}: SendEmailOptions) => {
    try {
        console.log(envVars.EMAIL_SENDER)
        const info = await transporter.sendMail({
            from: envVars.EMAIL_SENDER.SMTP_FROM || envVars.EMAIL_SENDER.SMTP_USER,
            // from: '"Skill Orbit" <codewithshakhawat@gmail.com>',
            to: to,
            subject: subject,
            html: html,
        })
        console.log(`\u2709\uFE0F Email sent to ${to}: ${info.messageId}`);
    } catch (error: any) {
        console.log("email sending error", error.message);
        throw new AppError(401, "Email error")
    }

}
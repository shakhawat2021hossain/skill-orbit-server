import type { Request, Response } from "express";
import { envVars } from "../../config/envVars.js";
import { stripe } from "../../utils/stripe.js";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { paymentServices } from "./payment.service.js";

const handleWebhookEvent = catchAsync(async (req: Request, res: Response) => {
    console.log("webhook is called")

    const sig = req.headers["stripe-signature"] as string;
    console.log("sig:", sig)
    const webhookSecret = envVars.STRIPE_WEBHOOK_SECRET

    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err: any) {
        console.error("⚠️ Webhook signature verification failed:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    const result = await paymentServices.handleWebhookEvent(event);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Webhook request send successfully!',
        data: result,
    });
});

export const paymentControllers = {
    handleWebhookEvent
}
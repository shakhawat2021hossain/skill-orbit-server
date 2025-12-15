import Stripe from "stripe";
import { envVars } from "../config/envVars.js";
export const stripe = new Stripe(envVars.STRIPE_SECRET_KEY);
//# sourceMappingURL=stripe.js.map
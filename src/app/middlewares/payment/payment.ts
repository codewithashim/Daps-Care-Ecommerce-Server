import Razorpay from "razorpay";
import config from "../../../config";

export const instance = new Razorpay({
    key_id: config.payment.rezarpay_api_key as string,
    key_secret: config.payment.rezarpay_api_secret as string,
});


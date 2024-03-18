import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IPayment } from "./payment.interface";
import { Request, Response } from "express";
import crypto from "crypto";
import config from "../../../config";
import { instance } from "../../middlewares/payment/payment";
import { Payment } from "./payment.model";

const checkoutSession = async (options: any) => {
  const order = await instance.orders.create(options);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, "Order not found");
  }
  return order;
};

const paymentVerification = async (options: any) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    options;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", config?.payment?.rezarpay_api_secret as string)
    .update(body.toString()) 
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    });

    // Define the redirect URL
    const redirectURL = `${config.domain}/paymentsuccess?reference=${razorpay_payment_id}`;

    // Return the redirect URL in the result
    return {
      redirectURL
    };
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, "Payment verification failed");
  }
};

export const PaymentService = {
  checkoutSession,
  paymentVerification
};

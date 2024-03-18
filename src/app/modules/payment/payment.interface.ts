import { Model } from "mongoose";

export type IPayment = {
    _id: any;
    amount: number;
    curency: string;
    orderId: any;
    paymentId: any;
    signature: any;
    email: string;
    status: string;
    address: string;
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature:string;
};

export type PaymentModel = Model<IPayment, Record<string, unknown>>;
import { Schema, model } from "mongoose";
import { IPayment, PaymentModel } from "./payment.interface";
 
const PaymentSchema = new Schema<IPayment, PaymentModel>(
  {
    razorpay_order_id: {
    type:String,
   },
   razorpay_payment_id: {
    type:String,
   },
   razorpay_signature: {
    type:String,
   },
  } 
);

export const Payment = model<IPayment, PaymentModel>("Payment", PaymentSchema);
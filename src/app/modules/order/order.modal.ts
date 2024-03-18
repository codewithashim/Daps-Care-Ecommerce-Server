import mongoose, { Schema, model } from "mongoose";
import { IOrder, OrderModel } from "./order.interface";

const OrderItemSchema = new Schema<IOrder, OrderModel>({
  shippingAddress: {
    type: Schema.Types.Mixed
  },
  clientName: {
    type: String
  },
  clientPhone: {
    type: String
  },
  paymentDetails: {
    type: String
  },
  productDetails: {
    type: Schema.Types.Mixed
  },
  carInfo: {
    type: Schema.Types.Mixed
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products"
  },
  quantity: {
    type: Number
  },
  totalPrice: {
    type: Number
  },
  discount: {
    type: Number
  },
  basedPrice: {
    type: Number
  },
  email: {
    type: String
  },
  razorpayPaymentId: {
    type: String
  },
  razorpayOrderId: {
    type: String
  },
  razorpaySignature: {
    type: String
  },
  status: {
    type: String,
    default: "paid"
  }
});

export const Order = model<IOrder, OrderModel>("Order", OrderItemSchema);

import { Model } from "mongoose";
import { IProduct } from "../product/product.interface";

export type IOrder = {
  _id: any;
  shippingAddress?: string;
  clientName?: string;
  clientPhone?: string;
  paymentDetails?: string;
  productDetails: any;
  carInfo: any;
  product?: any;
  quantity?: number;
  totalPrice?: number;
  discount?: number;
  basedPrice?: number;
  email?: string;
  status?: string;
  razorpayPaymentId: string;
  razorpayOrderId: string;
  razorpaySignature: string;
};

export type OrderModel = Model<IOrder, Record<string, unknown>>;

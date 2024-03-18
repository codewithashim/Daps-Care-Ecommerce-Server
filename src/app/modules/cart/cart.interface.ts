import { Model } from "mongoose";
import { IProduct } from "../product/product.interface";

export type ICartItem = {
  productDetails: any;
  carInfo: any;
  product?: any;
  quantity?: number;
  totalPrice?: number;
  discount?: number;
  basedPrice?: number;
  email?: string;
  status?: string;
};

export type CartModel = Model<ICartItem, Record<string, unknown>>;

import { Schema, model } from "mongoose";
import { CartModel, ICartItem } from "./cart.interface";

const CartSchema = new Schema<ICartItem, CartModel>(
  {
    productDetails: {
      type: Schema.Types.Mixed
    },
    carInfo: {
      type: Schema.Types.Mixed
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Products'
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
    status: {
      type: String,
      default: "unpaid"
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

export const Cart = model<ICartItem, CartModel>("Carts", CartSchema);

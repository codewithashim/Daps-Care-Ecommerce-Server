import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { Cart } from "./cart.modal";

import { ICartItem } from "./cart.interface";
import { Product } from "../product/product.model";

// add to card function . cart.service.ts
 
const addToCart = async (productId: string, payload: any): Promise<any> => {
  try {
      const product = await Product.findById({ _id: productId });
      if (!product) {
          throw new Error("Product not found");
      }

      // Use the provided data to calculate totalPrice, or fall back to existing logic
      const mainPrice = Number(product.price);
      const totalPrice = payload.totalPrice ? payload.totalPrice : mainPrice * payload.quantity;

      const cartItem = new Cart({
          product: productId,
          carInfo: payload.carInfo,          
          productDetails: payload.productDetails, 
          quantity: payload.quantity,
          totalPrice: totalPrice,
          email: payload.email,
          discount: payload.discount,
          basedPrice: payload.basedPrice,
          status: payload.status
      });

      await cartItem.save();
      return cartItem;
  } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
  }
};


const getCart = async (): Promise<ICartItem[]> => {
  try {
    const result = await Cart.find().populate("product");
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

// get by email

const getCartByUserEmail = async (email: string): Promise<ICartItem[]> => {
  const isEmailExist = await Cart.find({ email: email });

  if (!isEmailExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Email not found");
  }

  const result = await Cart.find({ email: email }).populate("product");
  return result;
};

const removeFromCart = async (productId: string): Promise<ICartItem | null> => {
  try {
    const result = await Cart.findByIdAndDelete(productId);
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

// update cart function . cart.service.ts


const updateCart = async (
  id: string,
  payload: any
): Promise<ICartItem | null> => {
  try {
    // Fetch the existing cart item
    const existingCartItem = await Cart.findById(id);

    console.log("existingCartItem", existingCartItem);

    if (!existingCartItem) {
      return null;
    }

    const product = await Product.findById({ _id: existingCartItem.product });
    // Calculate the updated total price based on the new quantity
    const price = product?.price;
    const discount = product?.discount;

    const newQuantity = payload.quantity;
    // const updatedTotalPrice = newQuantity * price! - discount!;
    const updatedTotalPrice = price! * (1 - discount! / 100) * newQuantity;



    // Update the payload with the new total price
    payload.totalPrice = updatedTotalPrice;

    // Update the cart item in the database
    const result = await Cart.findByIdAndUpdate(id, payload, { new: true });

    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

export const CartService = {
  addToCart,
  getCart,
  removeFromCart,
  getCartByUserEmail,
  updateCart,
};

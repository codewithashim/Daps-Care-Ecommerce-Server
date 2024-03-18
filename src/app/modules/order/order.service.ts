import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { Order } from "./order.modal";
import { IOrder } from "./order.interface";
import { Cart } from "../cart/cart.modal";
import { Product } from "../product/product.model";
 
const createOrder = async (payload: IOrder): Promise<any> => {
  try {
    // Check if the product exists
    const product = await Product?.findById(payload?.product);
    if (!product) {
      throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
    }

    // Check if the product is in the cart
    const cartItem = await Cart.findById(payload?._id);
    if (cartItem) {
      // If the product is in the cart, remove it
      await Cart.findByIdAndDelete(payload?._id);
    }
    const newOrder = new Order(payload);
    await newOrder.save();

    return newOrder; 
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getOrdersByUserEmail = async (email: string): Promise<any> => {
  try {
    const orders = await Order.find({ email }).populate("product");
    return orders;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const deleteOrder = async (orderId: string): Promise<any> => {
  try {
    const order = await Order.findByIdAndDelete(orderId);
    return order;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const updateOrder = async (
  orderId: string,
  orderData: IOrder
): Promise<any> => {
  try {
    const result = await Order.findByIdAndUpdate(orderId, orderData, {
      new: true
    });
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAllOrders = async (): Promise<any> => {
  try {
    const result = await Order.find().populate("product");
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getOrderById = async (orderId: string): Promise<any> => {
  try {
    const result = await Order.findById(orderId).populate("product");
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

export const OrderService = {
  createOrder,
  getOrdersByUserEmail,
  deleteOrder,
  updateOrder,
  getAllOrders,
  getOrderById
};

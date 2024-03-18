import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { OrderService } from "./order.service";
import { IOrder } from "./order.interface";

// create order function
const createOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...orderData } = req.body;
    const result = await OrderService.createOrder(orderData);
    sendResponse<IOrder>(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  }
);

// get all orders function
const getAllOrders: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OrderService.getAllOrders();
    sendResponse<IOrder[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  }
);

// get order by id function
const getOrderById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const orderId = req.params.id;
    const result = await OrderService.getOrderById(orderId);
    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  }
);

// get order by email function

const getOrdersByEmail: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const email = req.params.email;
    const result = await OrderService.getOrdersByUserEmail(email);
    sendResponse<IOrder[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  }
);

// update order function
const updateOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const orderId = req.params.id;
    const { ...orderData } = req.body;
    const result = await OrderService.updateOrder(orderId, orderData);
    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Order updated successfully!",
      data: result,
    });
  }
);

// delete order function
const deleteOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const orderId = req.params.id;
    const result = await OrderService.deleteOrder(orderId);
    sendResponse<IOrder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Order deleted successfully!",
      data: result,
    });
  }
);

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrdersByEmail,
};

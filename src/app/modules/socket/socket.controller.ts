import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ISocket } from "./socket.interface";
import { SocketService } from "./socket.service";

const createSocket: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const SocketData = req.body;
    const result = await SocketService.createSocket(SocketData);

    sendResponse<ISocket>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Socket added successfully!",
      data: result,
    });
  }
);

const getAllSocket: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SocketService.getAllSocket();

    sendResponse<ISocket[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Socket get successfully!",
      data: result,
    });
  }
);

const getSingleSocket: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const SocketId = req.params?.id;
    const result = await SocketService.getSingleSocket(SocketId);

    sendResponse<ISocket>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Socket get successfully!",
      data: result,
    });
  }
);


// update Socket function
const updateSocket: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const SocketId = req.params.id;
    const { ...SocketData } = req.body;
    const result = await SocketService.updateSocket(SocketId, SocketData);
    sendResponse<ISocket>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Socket updated successfully!",
      data: result,
    });
  }
);

// delete Socket function
const deleteSocket: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const SocketId = req.params.id;
    const result = await SocketService.deleteSocket(SocketId);
    sendResponse<ISocket>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Socket deleted successfully!",
      data: result,
    });
  }
);

export const SocketController = {
  createSocket,
  getAllSocket,
  getSingleSocket,
  deleteSocket,
  updateSocket
};

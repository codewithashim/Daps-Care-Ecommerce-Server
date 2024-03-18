import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { ISocket } from "./socket.interface";
import { Socket } from "./socket.model";

const createSocket = (payload: ISocket): Promise<ISocket> => {
  try {
    if (!payload) {
      throw new ApiError(httpStatus.NOT_FOUND, "Not Found Socket Data");
    } else {
      const result = Socket.create(payload);
      return result;
    }
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAllSocket = async (): Promise<ISocket[]> => {
  try {
    const result = Socket.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSingleSocket = async (SocketId: string): Promise<ISocket | null> => {
  const SocketItems = await Socket.findOne({ _id: SocketId });
  return SocketItems;
};

const deleteSocket = async (SocketId: string): Promise<ISocket | null> => {
  const SocketItem = await Socket.findOneAndDelete({ _id: SocketId });
  return SocketItem;
};

const updateSocket = async (
  SocketId: string,
  SocketData: ISocket
): Promise<ISocket | null> => {
  try {
    const result = await Socket.findByIdAndUpdate(
      { _id: SocketId },
      SocketData,
      {
        new: true,
      }
    );
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

export const SocketService = {
  createSocket,
  getAllSocket,
  getSingleSocket,
  updateSocket,
  deleteSocket,
};

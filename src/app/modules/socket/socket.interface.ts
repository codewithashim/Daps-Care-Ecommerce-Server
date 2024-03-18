import { Model } from "mongoose";

export type ISocket = {
  socketName: string;
};

export type SocketModal = Model<ISocket, Record<string, unknown>>;

import { Schema, model } from "mongoose";
import { ISocket, SocketModal } from "./socket.interface";

const SocketSchema = new Schema<ISocket, SocketModal>(
  {
    socketName: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Socket = model<ISocket, SocketModal>("Sockets", SocketSchema);

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const socket_model_1 = require("./socket.model");
const createSocket = (payload) => {
    try {
        if (!payload) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Not Found Socket Data");
        }
        else {
            const result = socket_model_1.Socket.create(payload);
            return result;
        }
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
};
const getAllSocket = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = socket_model_1.Socket.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingleSocket = (SocketId) => __awaiter(void 0, void 0, void 0, function* () {
    const SocketItems = yield socket_model_1.Socket.findOne({ _id: SocketId });
    return SocketItems;
});
const deleteSocket = (SocketId) => __awaiter(void 0, void 0, void 0, function* () {
    const SocketItem = yield socket_model_1.Socket.findOneAndDelete({ _id: SocketId });
    return SocketItem;
});
const updateSocket = (SocketId, SocketData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield socket_model_1.Socket.findByIdAndUpdate({ _id: SocketId }, SocketData, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
exports.SocketService = {
    createSocket,
    getAllSocket,
    getSingleSocket,
    updateSocket,
    deleteSocket,
};

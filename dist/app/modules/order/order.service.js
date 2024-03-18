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
exports.OrderService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const order_modal_1 = require("./order.modal");
const cart_modal_1 = require("../cart/cart.modal");
const product_model_1 = require("../product/product.model");
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if the product exists
        const product = yield (product_model_1.Product === null || product_model_1.Product === void 0 ? void 0 : product_model_1.Product.findById(payload === null || payload === void 0 ? void 0 : payload.product));
        if (!product) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Product not found");
        }
        // Check if the product is in the cart
        const cartItem = yield cart_modal_1.Cart.findById(payload === null || payload === void 0 ? void 0 : payload._id);
        if (cartItem) {
            // If the product is in the cart, remove it
            yield cart_modal_1.Cart.findByIdAndDelete(payload === null || payload === void 0 ? void 0 : payload._id);
        }
        const newOrder = new order_modal_1.Order(payload);
        yield newOrder.save();
        return newOrder;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getOrdersByUserEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_modal_1.Order.find({ email }).populate("product");
        return orders;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const deleteOrder = (orderId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_modal_1.Order.findByIdAndDelete(orderId);
        return order;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const updateOrder = (orderId, orderData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_modal_1.Order.findByIdAndUpdate(orderId, orderData, {
            new: true
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_modal_1.Order.find().populate("product");
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getOrderById = (orderId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_modal_1.Order.findById(orderId).populate("product");
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
exports.OrderService = {
    createOrder,
    getOrdersByUserEmail,
    deleteOrder,
    updateOrder,
    getAllOrders,
    getOrderById
};

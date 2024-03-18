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
exports.CartService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const cart_modal_1 = require("./cart.modal");
const product_model_1 = require("../product/product.model");
// add to card function . cart.service.ts
const addToCart = (productId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findById({ _id: productId });
        if (!product) {
            throw new Error("Product not found");
        }
        // Use the provided data to calculate totalPrice, or fall back to existing logic
        const mainPrice = Number(product.price);
        const totalPrice = payload.totalPrice ? payload.totalPrice : mainPrice * payload.quantity;
        const cartItem = new cart_modal_1.Cart({
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
        yield cartItem.save();
        return cartItem;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getCart = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_modal_1.Cart.find().populate("product");
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
// get by email
const getCartByUserEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const isEmailExist = yield cart_modal_1.Cart.find({ email: email });
    if (!isEmailExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Email not found");
    }
    const result = yield cart_modal_1.Cart.find({ email: email }).populate("product");
    return result;
});
const removeFromCart = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_modal_1.Cart.findByIdAndDelete(productId);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
// update cart function . cart.service.ts
const updateCart = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch the existing cart item
        const existingCartItem = yield cart_modal_1.Cart.findById(id);
        console.log("existingCartItem", existingCartItem);
        if (!existingCartItem) {
            return null;
        }
        const product = yield product_model_1.Product.findById({ _id: existingCartItem.product });
        // Calculate the updated total price based on the new quantity
        const price = product === null || product === void 0 ? void 0 : product.price;
        const discount = product === null || product === void 0 ? void 0 : product.discount;
        const newQuantity = payload.quantity;
        // const updatedTotalPrice = newQuantity * price! - discount!;
        const updatedTotalPrice = price * (1 - discount / 100) * newQuantity;
        // Update the payload with the new total price
        payload.totalPrice = updatedTotalPrice;
        // Update the cart item in the database
        const result = yield cart_modal_1.Cart.findByIdAndUpdate(id, payload, { new: true });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
exports.CartService = {
    addToCart,
    getCart,
    removeFromCart,
    getCartByUserEmail,
    updateCart,
};

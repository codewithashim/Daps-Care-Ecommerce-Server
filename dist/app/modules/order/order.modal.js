"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const OrderItemSchema = new mongoose_1.Schema({
    shippingAddress: {
        type: mongoose_1.Schema.Types.Mixed
    },
    clientName: {
        type: String
    },
    clientPhone: {
        type: String
    },
    paymentDetails: {
        type: String
    },
    productDetails: {
        type: mongoose_1.Schema.Types.Mixed
    },
    carInfo: {
        type: mongoose_1.Schema.Types.Mixed
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Products"
    },
    quantity: {
        type: Number
    },
    totalPrice: {
        type: Number
    },
    discount: {
        type: Number
    },
    basedPrice: {
        type: Number
    },
    email: {
        type: String
    },
    razorpayPaymentId: {
        type: String
    },
    razorpayOrderId: {
        type: String
    },
    razorpaySignature: {
        type: String
    },
    status: {
        type: String,
        default: "paid"
    }
});
exports.Order = (0, mongoose_1.model)("Order", OrderItemSchema);

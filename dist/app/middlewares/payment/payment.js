"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = void 0;
const razorpay_1 = __importDefault(require("razorpay"));
const config_1 = __importDefault(require("../../../config"));
exports.instance = new razorpay_1.default({
    key_id: config_1.default.payment.rezarpay_api_key,
    key_secret: config_1.default.payment.rezarpay_api_secret,
});

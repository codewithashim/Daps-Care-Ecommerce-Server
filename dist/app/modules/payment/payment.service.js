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
exports.PaymentService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const crypto_1 = __importDefault(require("crypto"));
const config_1 = __importDefault(require("../../../config"));
const payment_1 = require("../../middlewares/payment/payment");
const payment_model_1 = require("./payment.model");
const checkoutSession = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield payment_1.instance.orders.create(options);
    if (!order) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Order not found");
    }
    return order;
});
const paymentVerification = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = options;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto_1.default
        .createHmac("sha256", (_a = config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.payment) === null || _a === void 0 ? void 0 : _a.rezarpay_api_secret)
        .update(body.toString())
        .digest("hex");
    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
        yield payment_model_1.Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        });
        // Define the redirect URL
        const redirectURL = `${config_1.default.domain}/paymentsuccess?reference=${razorpay_payment_id}`;
        // Return the redirect URL in the result
        return {
            redirectURL
        };
    }
    else {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Payment verification failed");
    }
});
exports.PaymentService = {
    checkoutSession,
    paymentVerification
};

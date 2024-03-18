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
exports.PaymentController = exports.checkout = void 0;
const crypto_1 = __importDefault(require("crypto"));
const payment_1 = require("../../middlewares/payment/payment");
const payment_model_1 = require("./payment.model");
const checkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    };
    const order = yield payment_1.instance.orders.create(options);
    res.status(200).json({
        success: true,
        order,
    });
});
exports.checkout = checkout;
const paymentVerification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto_1.default
        .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
        .update(body.toString())
        .digest("hex");
    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
        yield payment_model_1.Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });
        res.redirect(`https://dapscare.com/paymentsuccess?reference=${razorpay_payment_id}`);
    }
    else {
        res.status(400).json({
            success: false,
        });
    }
});
exports.PaymentController = {
    paymentVerification,
    checkout: exports.checkout
};

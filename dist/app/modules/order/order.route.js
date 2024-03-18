"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post("/create-order", order_controller_1.OrderController.createOrder);
router.get("/get-orders", order_controller_1.OrderController.getAllOrders);
router.get("/get-order/:id", order_controller_1.OrderController.getOrderById);
router.get("/get-orders/:email", order_controller_1.OrderController.getOrdersByEmail);
router.patch("/update-order/:id", order_controller_1.OrderController.updateOrder);
router.delete("/delete-order/:id", order_controller_1.OrderController.deleteOrder);
exports.OrderRoutes = router;

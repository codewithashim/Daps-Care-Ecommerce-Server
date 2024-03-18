import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/create-order", OrderController.createOrder);

router.get("/get-orders", OrderController.getAllOrders);

router.get("/get-order/:id", OrderController.getOrderById);

router.get("/get-orders/:email", OrderController.getOrdersByEmail);

router.patch("/update-order/:id", OrderController.updateOrder);

router.delete("/delete-order/:id", OrderController.deleteOrder);

export const OrderRoutes = router;

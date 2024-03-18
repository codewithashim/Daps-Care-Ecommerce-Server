
import express from "express";
import { PaymentController } from "./payment.controller";

const router = express.Router();

router.post("/checkout", PaymentController.checkout);
router.post('/paymentverification', PaymentController.paymentVerification)
 
export const PaymentRoutes = router;
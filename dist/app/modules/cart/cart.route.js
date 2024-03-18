"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
router.post('/add-to-cart/:id', cart_controller_1.CartController.addToCart);
router.get('/get-cart', cart_controller_1.CartController.getCart);
router.get('/get-cart/:email', cart_controller_1.CartController.getCartByUserEmail);
router.delete('/remove-from-cart/:id', cart_controller_1.CartController.removeFromCart);
router.patch('/update-cart/:id', cart_controller_1.CartController.updateCart);
exports.CartRoutes = router;

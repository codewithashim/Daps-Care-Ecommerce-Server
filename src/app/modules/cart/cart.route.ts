import express from 'express';
import { CartController } from './cart.controller';

const router = express.Router();

router.post('/add-to-cart/:id', CartController.addToCart);

router.get('/get-cart', CartController.getCart);

router.get('/get-cart/:email', CartController.getCartByUserEmail);

router.delete('/remove-from-cart/:id', CartController.removeFromCart);

router.patch('/update-cart/:id', CartController.updateCart);


export const CartRoutes = router;
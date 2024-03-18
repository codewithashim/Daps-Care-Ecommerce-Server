import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICartItem } from './cart.interface';
import { CartService } from './cart.service';
 
const addToCart: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const productId = req.params.id;
        const { carInfo, productDetails, quantity, totalPrice, email, discount, basedPrice, status } = req.body;
        
        // Pass all data to the service
        const result = await CartService.addToCart(productId, {
            carInfo,
            productDetails,
            quantity,
            totalPrice,
            basedPrice,
            email,
            discount,
            status
        });

        sendResponse<ICartItem>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'product added to cart successfully!',
            data: result,
        });
    }
);

// == get cart function == cart.controller.ts

const getCart: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const result = await CartService.getCart();

        sendResponse<ICartItem[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Cart fetched successfully!',
            data: result,
        });
    }
)

// get card by user email . cart.controller.ts

const getCartByUserEmail: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const { email } = req.params

        const result = await CartService.getCartByUserEmail(email);

        sendResponse<ICartItem[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Cart fetched successfully!',
            data: result,
        });
    }
)


// remove from cart function . cart.controller.ts

const removeFromCart: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const productId = req.params.id;
        const result = await CartService.removeFromCart(productId);
        sendResponse<ICartItem>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Product removed from cart successfully!',
            data: result,
        });
    }
)

// update cart function . cart.controller.ts

const updateCart: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const productId = req.params.id;
        const { ...cartData } = req.body;
        const result = await CartService.updateCart(productId, cartData);
        sendResponse<ICartItem>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Cart updated successfully!',
            data: result,
        });
    }
)


export const CartController = {
    addToCart,
    getCart,
    removeFromCart,
    getCartByUserEmail,
    updateCart

}



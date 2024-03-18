import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IWishList } from './wishlist.interface';
import { WishListService } from './wishlist.service';

const addToWishlist: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const wishlistData = req.body;
    const result = await WishListService.addToWishlist(wishlistData);
    
    sendResponse<IWishList>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book added to wishlist successfully!',
      data: result,
    });
  }
);

const getWishlist: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await WishListService.getWishlist();
    sendResponse<IWishList[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wishlist fetched successfully',
      data: result,
    });
  }
);

const getWishlistById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const wishlistId = req.params.id;
    const result = await WishListService.getWishlistById(wishlistId);
    sendResponse<IWishList>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wishlist fetched successfully',
      data: result,
    });
  }
);

const getWishlistByUserEmail = catchAsync(
  async (req: Request, res: Response) => {
    const userEmail = req.params.userEmail;
    const result = await WishListService.getWishlistByUserEmail(userEmail);
    sendResponse<IWishList []>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wishlist fetched successfully',
      data: result,
    });
  }
);

const updateWishlist: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const wishlistId = req.params.id;
    const wishlistData = req.body;
    const result = await WishListService.updateWishlist(
      wishlistId,
      wishlistData
    );
    sendResponse<IWishList>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wishlist updated successfully!',
      data: result,
    });
  }
);

const deleteWishlist: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const wishlistId = req.params.id;
    const result = await WishListService.deleteWishlist(wishlistId);
    sendResponse<IWishList>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wishlist deleted successfully!',
      data: result,
    });
  }
);

export const WishlistController = {
  addToWishlist,
  getWishlist,
  getWishlistById,
  getWishlistByUserEmail,
  updateWishlist,
  deleteWishlist,
};

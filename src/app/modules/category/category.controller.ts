import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IPopularCategory } from './category.interface';
import { PopularCategoryService } from './category.service';

// === create popular category ===

const addPopularCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const popularCategoryData = req.body;
    const result = await PopularCategoryService.addPopularCategory(
      popularCategoryData
    );

    sendResponse<IPopularCategory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Popular Category added successfully!',
      data: result,
    });
  }
);

// ======== get all popular category =========

const getPopularCategories: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PopularCategoryService.getPopularCategories();

    sendResponse<IPopularCategory[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Popular Category fetched successfully!',
      data: result,
    });
  }
);

// ======== delete popular category =========

const deletePopularCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const popularCategoryId = req.params.id;
    const result = await PopularCategoryService.deletePopularCategory(
      popularCategoryId
    );
    sendResponse<IPopularCategory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Popular Category deleted successfully!',
      data: result,
    });
  }
);

// ======== get single popular category =========

const getSinglePopularCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const popularCategoryId = req.params.id;
    const result = await PopularCategoryService.getSinglePopularCategory(
      popularCategoryId
    );
    sendResponse<IPopularCategory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Popular Category fetched successfully!',
      data: result,
    });
  }
);

// ======== update popular category =========

const updatePopularCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const popularCategoryId = req.params.id;
    const popularCategoryData = req.body;
    const result = await PopularCategoryService.updatePopularCategory(
      popularCategoryId,
      popularCategoryData
    );
    sendResponse<IPopularCategory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Popular Category updated successfully!',
      data: result,
    });
  }
);

export const PopularCategoryController = {
  addPopularCategory,
  getPopularCategories,
  deletePopularCategory,
  getSinglePopularCategory,
  updatePopularCategory,
};

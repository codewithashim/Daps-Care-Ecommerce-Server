import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IBrand } from "./brand.interface";
import { BrandService } from "./brand.service";

const createBrand: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const BrandData = req.body;
    const result = await BrandService.createBrand(BrandData);

    sendResponse<IBrand>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Brand added successfully!",
      data: result,
    });
  }
);

const getAllBrand: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await BrandService.getAllBrand();

    sendResponse<IBrand[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Brand get successfully!",
      data: result,
    });
  }
);

const getSingleBrand: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const BrandId = req.params?.id;
    const result = await BrandService.getSingleBrand(BrandId);

    sendResponse<IBrand>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Brand get successfully!",
      data: result,
    });
  }
);


// update Brand function
const updateBrand: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const BrandId = req.params.id;
    const { ...BrandData } = req.body;
    const result = await BrandService.updateBrand(BrandId, BrandData);
    sendResponse<IBrand>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Brand updated successfully!",
      data: result,
    });
  }
);

// delete Brand function
const deleteBrand: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const BrandId = req.params.id;
    const result = await BrandService.deleteBrand(BrandId);
    sendResponse<IBrand>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Brand deleted successfully!",
      data: result,
    });
  }
);

export const BrandController = {
  createBrand,
  getAllBrand,
  getSingleBrand,
  deleteBrand,
  updateBrand
};

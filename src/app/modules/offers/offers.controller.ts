import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IBanners } from "./offers.interface";
import { BannersService } from "./offers.service";

const createBanners: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const BannersData = req.body;
    const result = await BannersService.createBanners(BannersData);

    sendResponse<IBanners>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Banners added successfully!",
      data: result,
    });
  }
);

const getAllBanners: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await BannersService.getAllBanners();

    sendResponse<IBanners[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Banners get successfully!",
      data: result,
    });
  }
);

const getSingleBanners: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const BannersId = req.params?.id;
    const result = await BannersService.getSingleBanners(BannersId);

    sendResponse<IBanners>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Banners get successfully!",
      data: result,
    });
  }
);


// update Banners function
const updateBanners: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const BannersId = req.params.id;
    const { ...BannersData } = req.body;
    const result = await BannersService.updateBanners(BannersId, BannersData);
    sendResponse<IBanners>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Banners updated successfully!",
      data: result,
    });
  }
);

// delete Banners function
const deleteBanners: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const BannersId = req.params.id;
    const result = await BannersService.deleteBanners(BannersId);
    sendResponse<IBanners>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Banners deleted successfully!",
      data: result,
    });
  }
);

export const BannersController = {
  createBanners,
  getAllBanners,
  getSingleBanners,
  deleteBanners,
  updateBanners
};

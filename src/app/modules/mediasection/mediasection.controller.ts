import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IMedia, ISlider, IStory } from "./mediasection.interface";
import { MediaSectionService } from "./mediasection.service";

// ===== Add Explore Brand ======
const addExploreBrand: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await MediaSectionService.addExploreBrand(data);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand added successfully!",
      data: result,
    });
  }
);

const getExploreBrand: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MediaSectionService.getExploreBrand();
    sendResponse<IMedia[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand get successfully!",
      data: result,
    });
  }
);

const getSingelExploreBrand: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await MediaSectionService.getSingelExploreBrand(id);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand get successfully!",
      data: result,
    });
  }
);

const updateExploreBrand: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const id = req.params.id;
    const result = await MediaSectionService.updateExploreBrand(id, data);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand update successfully!",
      data: result,
    });
  }
);

const deleteExploreBrand: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await MediaSectionService.deleteExploreBrand(id);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand delete successfully!",
      data: result,
    });
  }
);

// ====== story

const addStory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await MediaSectionService.addStory(data);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore successfully!",
      data: result,
    });
  }
);

const getStory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MediaSectionService.getStory();
    sendResponse<IStory[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore Story successfully!",
      data: result,
    });
  }
);

const getSingelStory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await MediaSectionService.getSingelStory(id);
    sendResponse<IStory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand get successfully!",
      data: result,
    });
  }
);

const updateStory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const id = req.params.id;
    const result = await MediaSectionService.updateStory(id, data);
    sendResponse<IStory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand update successfully!",
      data: result,
    });
  }
);

const deleteStory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await MediaSectionService.deleteStory(id);
    sendResponse<IStory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand delete successfully!",
      data: result,
    });
  }
);

// ========= Trending Product

const addTrendingProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await MediaSectionService.addTrendingProduct(data);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand added successfully!",
      data: result,
    });
  }
);

const getTrendingProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MediaSectionService.getTrendingProduct();
    sendResponse<IMedia[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand get successfully!",
      data: result,
    });
  }
);

const getSingelTrendingProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await MediaSectionService.getSingelTrendingProduct(id);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand get successfully!",
      data: result,
    });
  }
);

const updateTrendingProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const id = req.params.id;
    const result = await MediaSectionService.updateTrendingProduct(id, data);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand update successfully!",
      data: result,
    });
  }
);

const deleteTrendingProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await MediaSectionService.deleteTrendingProduct(id);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand delete successfully!",
      data: result,
    });
  }
);

// =========

const addSlider: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await MediaSectionService.addSlider(data);
    sendResponse<ISlider>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Added successfully!",
      data: result,
    });
  }
);

const getSlider: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MediaSectionService.getSlider();
    sendResponse<ISlider[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get successfully!",
      data: result,
    });
  }
);

const getSingelSlider: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await MediaSectionService.getSingeSlider(id);
    sendResponse<ISlider>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore Slider get successfully!",
      data: result,
    });
  }
);

const updateSlider: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const id = req.params.id;
    const result = await MediaSectionService.updateSlider(id, data);
    sendResponse<ISlider>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Update successfully!",
      data: result,
    });
  }
);

const deleteSlider: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await MediaSectionService.deleteSlider(id);
    sendResponse<ISlider>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand delete successfully!",
      data: result,
    });
  }
);

// =======
// ========= Bestsellers

const addBestsellers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await MediaSectionService.addBestsellers(data);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand added successfully!",
      data: result,
    });
  }
);

const getBestsellers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MediaSectionService.getBestsellers();
    sendResponse<IMedia[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand get successfully!",
      data: result,
    });
  }
);

const getSingelBestsellers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await MediaSectionService.getSingelBestsellers(id);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand get successfully!",
      data: result,
    });
  }
);

const updateBestsellers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const id = req.params.id;
    const result = await MediaSectionService.updateBestsellers(id, data);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand update successfully!",
      data: result,
    });
  }
);

const deleteBestsellers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await MediaSectionService.deleteBestsellers(id);
    sendResponse<IMedia>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Explore brand delete successfully!",
      data: result,
    });
  }
);

export const MediaSectionController = {
  addExploreBrand,
  getExploreBrand,
  getSingelExploreBrand,
  updateExploreBrand,
  deleteExploreBrand,

  // ==== story
  addStory,
  getStory,
  getSingelStory,
  updateStory,
  deleteStory,

  // ==== Trending Product

  addTrendingProduct,
  getTrendingProduct,
  getSingelTrendingProduct,
  updateTrendingProduct,
  deleteTrendingProduct,

  // ==== Bestsellers

  addBestsellers,
  getBestsellers,
  getSingelBestsellers,
  updateBestsellers,
  deleteBestsellers,

  //   ==== Product Slider
  addSlider,
  getSlider,
  getSingelSlider,
  updateSlider,
  deleteSlider,
};

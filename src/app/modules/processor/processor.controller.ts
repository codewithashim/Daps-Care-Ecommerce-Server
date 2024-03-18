import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IProcessor } from "./processor.interface";
import { ProcessorService } from "./processor.service";

const createProcessor: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const ProcessorData = req.body;
    const result = await ProcessorService.createProcessor(ProcessorData);

    sendResponse<IProcessor>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Processor added successfully!",
      data: result,
    });
  }
);

const getAllProcessor: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProcessorService.getAllProcessor();

    sendResponse<IProcessor[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Processor get successfully!",
      data: result,
    });
  }
);

const getSingleProcessor: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const ProcessorId = req.params?.id;
    const result = await ProcessorService.getSingleProcessor(ProcessorId);

    sendResponse<IProcessor>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Processor get successfully!",
      data: result,
    });
  }
);


// update Processor function
const updateProcessor: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const ProcessorId = req.params.id;
    const { ...ProcessorData } = req.body;
    const result = await ProcessorService.updateProcessor(ProcessorId, ProcessorData);
    sendResponse<IProcessor>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Processor updated successfully!",
      data: result,
    });
  }
);

// delete Processor function
const deleteProcessor: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const ProcessorId = req.params.id;
    const result = await ProcessorService.deleteProcessor(ProcessorId);
    sendResponse<IProcessor>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Processor deleted successfully!",
      data: result,
    });
  }
);

export const ProcessorController = {
  createProcessor,
  getAllProcessor,
  getSingleProcessor,
  deleteProcessor,
  updateProcessor
};

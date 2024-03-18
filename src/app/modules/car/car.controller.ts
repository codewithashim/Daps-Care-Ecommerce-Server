import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ICar } from "./car.interface";
import { CarService } from "./car.service";

const createCar: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const carData = req.body;
    const result = await CarService.createCar(carData);

    sendResponse<ICar>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "car added successfully!",
      data: result,
    });
  }
);

const getAllCar: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CarService.getAllCar();

    sendResponse<ICar[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "car get successfully!",
      data: result,
    });
  }
);

const getSingleCar: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const carId = req.params?.id;
    const result = await CarService.getSingleCar(carId);

    sendResponse<ICar>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "car get successfully!",
      data: result,
    });
  }
);


// update Car function
const updateCar: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const CarId = req.params.id;
    const { ...CarData } = req.body;
    const result = await CarService.updateCar(CarId, CarData);
    sendResponse<ICar>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Car updated successfully!",
      data: result,
    });
  }
);

// delete Car function
const deleteCar: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const CarId = req.params.id;
    const result = await CarService.deleteCar(CarId);
    sendResponse<ICar>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Car deleted successfully!",
      data: result,
    });
  }
);

export const CarController = {
  createCar,
  getAllCar,
  getSingleCar,
  deleteCar,
  updateCar
};

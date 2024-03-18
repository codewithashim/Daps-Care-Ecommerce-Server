import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { ICar } from "./car.interface";
import { Car } from "./car.model";

const createCar = (payload: ICar): Promise<ICar> => {
  try {
    if (!payload) {
      throw new ApiError(httpStatus.NOT_FOUND, "Not Found Car Data");
    } else {
      const result = Car.create(payload);
      return result;
    }
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAllCar = async (): Promise<ICar[]> => {
  try {
    const result = Car.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSingleCar = async (carId: string): Promise<ICar | null> => {
  const carItems = await Car.findOne({ _id: carId });
  return carItems;
};

const deleteCar = async (carId: string): Promise<ICar | null> => {
  const CarItem = await Car.findOneAndDelete({ _id: carId });
  return CarItem;
};

const updateCar = async (
  carId: string,
  carData: ICar
): Promise<ICar | null> => {
  try {
    const result = await Car.findByIdAndUpdate({ _id: carId }, carData, {
      new: true,
    });
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

export const CarService = {
  createCar,
  getAllCar,
  getSingleCar,
  updateCar,
  deleteCar,
};

import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IProcessor } from "./processor.interface";
import { Processor } from "./processor.model";

const createProcessor = (payload: IProcessor): Promise<IProcessor> => {
  try {
    if (!payload) {
      throw new ApiError(httpStatus.NOT_FOUND, "Not Found Processor Data");
    } else {
      const result = Processor.create(payload);
      console.log(result)
      return result;
    }
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAllProcessor = async (): Promise<IProcessor[]> => {
  try {
    const result = Processor.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSingleProcessor = async (ProcessorId: string): Promise<IProcessor | null> => {
  const ProcessorItems = await Processor.findOne({ _id: ProcessorId });
  return ProcessorItems;
};

const deleteProcessor = async (ProcessorId: string): Promise<IProcessor | null> => {
  const ProcessorItem = await Processor.findByIdAndDelete({ _id: ProcessorId});
  return ProcessorItem;
};

const updateProcessor = async (_id: string, ProcessorData: IProcessor): Promise<IProcessor | null> => {
  try {
    const result = await Processor.findByIdAndUpdate({ _id: _id }, ProcessorData, {
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

export const ProcessorService = {
  createProcessor,
  getAllProcessor,
  getSingleProcessor,
  updateProcessor,
  deleteProcessor

};

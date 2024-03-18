import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IBrand } from "./brand.interface";
import { Brand } from "./brand.model";

const createBrand = (payload: IBrand): Promise<IBrand> => {
  try {
    if (!payload) {
      throw new ApiError(httpStatus.NOT_FOUND, "Not Found Brand Data");
    } else {
      const result = Brand.create(payload);
      return result;
    }
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAllBrand = async (): Promise<IBrand[]> => {
  try {
    const result = Brand.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSingleBrand = async (BrandId: string): Promise<IBrand | null> => {
  const BrandItems = await Brand.findOne({ _id: BrandId });
  return BrandItems;
};

const deleteBrand = async (BrandId: string): Promise<IBrand | null> => {
  try {
    const brand = (await Brand.findByIdAndDelete({
      _id: BrandId,
    })) as unknown as IBrand | null;
    return brand;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const updateBrand = async (BrandId: string, BrandData: IBrand): Promise<IBrand | null> => {
  try {
    const result = await Brand.findByIdAndUpdate(BrandId, BrandData, {
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

export const BrandService = {
  createBrand,
  getAllBrand,
  getSingleBrand,
  updateBrand,
  deleteBrand

};

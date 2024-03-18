import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IBanners } from "./offers.interface";
import { Banners } from "./offers.model";

const createBanners = (payload: IBanners): Promise<IBanners> => {
  try {
    if (!payload) {
      throw new ApiError(httpStatus.NOT_FOUND, "Not Found Banners Data");
    } else {
      const result = Banners.create(payload);
      return result;
    }
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAllBanners = async (): Promise<IBanners[]> => {
  try {
    const result = Banners.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSingleBanners = async (BannersId: string): Promise<IBanners | null> => {
  const BannersItems = await Banners.findOne({ _id: BannersId });
  return BannersItems;
};

const deleteBanners = async (BannersId: string): Promise<IBanners | null> => {
  const BannersItem = await Banners.findOneAndDelete({ _id: BannersId });
  return BannersItem;
};

const updateBanners = async (BannersId: string, BannersData: IBanners): Promise<IBanners | null> => {
  try {
    const result = await Banners.findByIdAndUpdate({_id:BannersId}, BannersData, {
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

export const BannersService = {
  createBanners,
  getAllBanners,
  getSingleBanners,
  updateBanners,
  deleteBanners

};

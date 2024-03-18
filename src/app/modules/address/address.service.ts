import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IAddress } from "./address.interface";
import { Address } from "./address.model";

const createAddress = async (payload: IAddress): Promise<IAddress> => {
  try {
    const AddressData = await Address.create(payload);
    return AddressData;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAllAddress = async (): Promise<IAddress[]> => {
  try {
    const AddressData = await Address.find();
    return AddressData;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAddressById = async (id: string): Promise<IAddress> => {
  try {
    const AddressData = await Address.findById(id);
    if (!AddressData) {
      throw new ApiError(httpStatus.NOT_FOUND, "Address not found");
    }
    return AddressData.toObject();
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAddressByEmail = async (email: string): Promise<IAddress[]> => {
  try {
    const result = await Address.find({ email });
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const updateAddress = async (
  id: string,
  payload: IAddress
): Promise<IAddress> => {
  try {
    const result = await Address.findByIdAndUpdate(id, payload, {
      new: true,
    });
    if (!result) {
      throw new ApiError(httpStatus.NOT_FOUND, "Address not found");
    }
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const deleteAddress = async (id: string): Promise<IAddress> => {
  try {
    const result = await Address.findByIdAndDelete(id);
    if (!result) {
      throw new ApiError(httpStatus.NOT_FOUND, "Address not found");
    }
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

export const AddressService = {
  createAddress,
  getAllAddress,
  getAddressById,
  getAddressByEmail,
  updateAddress,
  deleteAddress,
};

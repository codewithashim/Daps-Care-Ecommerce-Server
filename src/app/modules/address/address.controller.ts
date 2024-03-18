import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AddressService } from "./address.service";
import { IAddress } from "./address.interface";

// == add address function == address.controller.ts

const createAddress: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const addressData = req.body;
    
    const result = await AddressService.createAddress(addressData);
    sendResponse<IAddress>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Address added successfully!",
      data: result,
    });
  }
);

// == get all addresses function == address.controller.ts

const getAllAddresses: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AddressService.getAllAddress();

    sendResponse<IAddress[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All addresses fetched successfully!",
      data: result,
    });
  }
);

// == get address by id function == address.controller.ts

const getAddressById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const addressId = req.params.id;
    const result = await AddressService.getAddressById(addressId);

    sendResponse<IAddress>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Address fetched successfully!",
      data: result,
    });
  }
);

// == get address by email function == address.controller.ts

const getAddressByEmail: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const email = req.params.email;
    const result = await AddressService.getAddressByEmail(email);

    sendResponse<IAddress[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Address fetched successfully!",
        data: result,
    });
});

// == update address function == address.controller.ts

const updateAddress: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const addressId = req.params.id;
    const { ...addressData } = req.body;
    const result = await AddressService.updateAddress(addressId, addressData);
    sendResponse<IAddress>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Address updated successfully!",
      data: result,
    });
  }
);

// == delete address function == address.controller.ts

const deleteAddress: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const addressId = req.params.id;
    const result = await AddressService.deleteAddress(addressId);
    sendResponse<IAddress>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Address deleted successfully!",
      data: result,
    });
  }
);

export const AddressController = {
  createAddress,
  getAllAddresses,
  getAddressById,
  updateAddress,
  deleteAddress,
  getAddressByEmail,
};

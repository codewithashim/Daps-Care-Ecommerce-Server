"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const address_model_1 = require("./address.model");
const createAddress = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AddressData = yield address_model_1.Address.create(payload);
        return AddressData;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getAllAddress = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AddressData = yield address_model_1.Address.find();
        return AddressData;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getAddressById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AddressData = yield address_model_1.Address.findById(id);
        if (!AddressData) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Address not found");
        }
        return AddressData.toObject();
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getAddressByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield address_model_1.Address.find({ email });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const updateAddress = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield address_model_1.Address.findByIdAndUpdate(id, payload, {
            new: true,
        });
        if (!result) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Address not found");
        }
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const deleteAddress = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield address_model_1.Address.findByIdAndDelete(id);
        if (!result) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Address not found");
        }
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
exports.AddressService = {
    createAddress,
    getAllAddress,
    getAddressById,
    getAddressByEmail,
    updateAddress,
    deleteAddress,
};

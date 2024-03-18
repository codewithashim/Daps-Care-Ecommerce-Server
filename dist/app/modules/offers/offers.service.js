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
exports.BannersService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const offers_model_1 = require("./offers.model");
const createBanners = (payload) => {
    try {
        if (!payload) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Not Found Banners Data");
        }
        else {
            const result = offers_model_1.Banners.create(payload);
            return result;
        }
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
};
const getAllBanners = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = offers_model_1.Banners.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingleBanners = (BannersId) => __awaiter(void 0, void 0, void 0, function* () {
    const BannersItems = yield offers_model_1.Banners.findOne({ _id: BannersId });
    return BannersItems;
});
const deleteBanners = (BannersId) => __awaiter(void 0, void 0, void 0, function* () {
    const BannersItem = yield offers_model_1.Banners.findOneAndDelete({ _id: BannersId });
    return BannersItem;
});
const updateBanners = (BannersId, BannersData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offers_model_1.Banners.findByIdAndUpdate({ _id: BannersId }, BannersData, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
exports.BannersService = {
    createBanners,
    getAllBanners,
    getSingleBanners,
    updateBanners,
    deleteBanners
};

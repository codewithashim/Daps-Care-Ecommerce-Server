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
exports.BrandService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const brand_model_1 = require("./brand.model");
const createBrand = (payload) => {
    try {
        if (!payload) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Not Found Brand Data");
        }
        else {
            const result = brand_model_1.Brand.create(payload);
            return result;
        }
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
};
const getAllBrand = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = brand_model_1.Brand.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingleBrand = (BrandId) => __awaiter(void 0, void 0, void 0, function* () {
    const BrandItems = yield brand_model_1.Brand.findOne({ _id: BrandId });
    return BrandItems;
});
const deleteBrand = (BrandId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const brand = (yield brand_model_1.Brand.findByIdAndDelete({
            _id: BrandId,
        }));
        return brand;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const updateBrand = (BrandId, BrandData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield brand_model_1.Brand.findByIdAndUpdate(BrandId, BrandData, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
exports.BrandService = {
    createBrand,
    getAllBrand,
    getSingleBrand,
    updateBrand,
    deleteBrand
};

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
exports.CarService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const car_model_1 = require("./car.model");
const createCar = (payload) => {
    try {
        if (!payload) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Not Found Car Data");
        }
        else {
            const result = car_model_1.Car.create(payload);
            return result;
        }
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
};
const getAllCar = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = car_model_1.Car.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingleCar = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const carItems = yield car_model_1.Car.findOne({ _id: carId });
    return carItems;
});
const deleteCar = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    const CarItem = yield car_model_1.Car.findOneAndDelete({ _id: carId });
    return CarItem;
});
const updateCar = (carId, carData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.Car.findByIdAndUpdate({ _id: carId }, carData, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
exports.CarService = {
    createCar,
    getAllCar,
    getSingleCar,
    updateCar,
    deleteCar,
};

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
exports.PopularCategoryService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const category_model_1 = require("./category.model");
// ==== add popular category =====
const addPopularCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const popularCategory = new category_model_1.PopularCategory(payload);
        yield popularCategory.save();
        return popularCategory;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
// ==== get all popular category =====
const getPopularCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_model_1.PopularCategory.find().populate('categories');
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
// ==== delete popular category =====
const deletePopularCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_model_1.PopularCategory.findByIdAndDelete({ _id: id });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
// ==== get single popular category =====
const getSinglePopularCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_model_1.PopularCategory.findById({ _id: id }).populate('categories');
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
// ==== update popular category =====
const updatePopularCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_model_1.PopularCategory.findByIdAndUpdate({ _id: id }, payload, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
exports.PopularCategoryService = {
    addPopularCategory,
    getPopularCategories,
    deletePopularCategory,
    getSinglePopularCategory,
    updatePopularCategory,
};

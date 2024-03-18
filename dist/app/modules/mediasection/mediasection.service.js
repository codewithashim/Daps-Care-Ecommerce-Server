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
exports.MediaSectionService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const mediasection_model_1 = require("./mediasection.model");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
// ===== explore brand =======
const addExploreBrand = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mediasection_model_1.BrandExplore.create(payload);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getExploreBrand = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mediasection_model_1.BrandExplore.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingelExploreBrand = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const prouct = yield mediasection_model_1.BrandExplore.findById({ _id: id });
        return prouct;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const deleteExploreBrand = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const product = yield mediasection_model_1.BrandExplore.findByIdAndDelete({ _id: id });
        return product;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const updateExploreBrand = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const result = yield mediasection_model_1.BrandExplore.findByIdAndUpdate({ _id: id }, payload, {
            new: true,
        });
        if (!result) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Product not found");
        }
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
// ======= Story ===========
const addStory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mediasection_model_1.Story.create(payload);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getStory = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mediasection_model_1.Story.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingelStory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const prouct = yield mediasection_model_1.Story.findById({ _id: id });
        return prouct;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const deleteStory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const product = yield mediasection_model_1.Story.findByIdAndDelete({ _id: id });
        return product;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const updateStory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const result = yield mediasection_model_1.Story.findByIdAndUpdate({ _id: id }, payload, {
            new: true,
        });
        if (!result) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Product not found");
        }
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
// ====== TrendingProduct ======
const addTrendingProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mediasection_model_1.TrendingProduct.create(payload);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getTrendingProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mediasection_model_1.TrendingProduct.find().populate('product');
        return result;
    }
    catch (error) {
        console.log(error);
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingelTrendingProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const prouct = yield mediasection_model_1.TrendingProduct.findById({ _id: id }).populate('product');
        return prouct;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const deleteTrendingProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const product = yield mediasection_model_1.TrendingProduct.findByIdAndDelete({ _id: id });
        return product;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const updateTrendingProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const result = yield mediasection_model_1.TrendingProduct.findByIdAndUpdate({ _id: id }, payload, {
            new: true,
        });
        if (!result) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Product not found");
        }
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
// ===== Slider
const addSlider = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mediasection_model_1.Slider.create(payload);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSlider = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mediasection_model_1.Slider.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingeSlider = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const prouct = yield mediasection_model_1.Slider.findById({ _id: id });
        return prouct;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const deleteSlider = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const product = yield mediasection_model_1.Slider.findByIdAndDelete({ _id: id });
        return product;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const updateSlider = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const result = yield mediasection_model_1.Slider.findByIdAndUpdate({ _id: id }, payload, {
            new: true,
        });
        if (!result) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Product not found");
        }
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
// ============
// ====== BestSealler ======
const addBestsellers = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mediasection_model_1.Bestsellers.create(payload);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getBestsellers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield mediasection_model_1.Bestsellers.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingelBestsellers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const prouct = yield mediasection_model_1.Bestsellers.findById({ _id: id });
        return prouct;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const deleteBestsellers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const product = yield mediasection_model_1.Bestsellers.findByIdAndDelete({ _id: id });
        return product;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const updateBestsellers = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const result = yield mediasection_model_1.Bestsellers.findByIdAndUpdate({ _id: id }, payload, {
            new: true,
        });
        if (!result) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Product not found");
        }
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
exports.MediaSectionService = {
    addExploreBrand,
    getExploreBrand,
    getSingelExploreBrand,
    updateExploreBrand,
    deleteExploreBrand,
    // ==== story
    addStory,
    getStory,
    getSingelStory,
    updateStory,
    deleteStory,
    // ==== Trending Product
    addTrendingProduct,
    getTrendingProduct,
    getSingelTrendingProduct,
    updateTrendingProduct,
    deleteTrendingProduct,
    // ====Bestsellers
    addBestsellers,
    getBestsellers,
    getSingelBestsellers,
    updateBestsellers,
    deleteBestsellers,
    // ===== Product Slider
    addSlider,
    getSlider,
    getSingeSlider,
    updateSlider,
    deleteSlider,
};

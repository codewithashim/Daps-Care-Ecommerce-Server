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
exports.MediaSectionController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const mediasection_service_1 = require("./mediasection.service");
// ===== Add Explore Brand ======
const addExploreBrand = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield mediasection_service_1.MediaSectionService.addExploreBrand(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand added successfully!",
        data: result,
    });
}));
const getExploreBrand = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mediasection_service_1.MediaSectionService.getExploreBrand();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand get successfully!",
        data: result,
    });
}));
const getSingelExploreBrand = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.getSingelExploreBrand(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand get successfully!",
        data: result,
    });
}));
const updateExploreBrand = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.updateExploreBrand(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand update successfully!",
        data: result,
    });
}));
const deleteExploreBrand = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.deleteExploreBrand(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand delete successfully!",
        data: result,
    });
}));
// ====== story
const addStory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield mediasection_service_1.MediaSectionService.addStory(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore successfully!",
        data: result,
    });
}));
const getStory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mediasection_service_1.MediaSectionService.getStory();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore Story successfully!",
        data: result,
    });
}));
const getSingelStory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.getSingelStory(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand get successfully!",
        data: result,
    });
}));
const updateStory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.updateStory(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand update successfully!",
        data: result,
    });
}));
const deleteStory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.deleteStory(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand delete successfully!",
        data: result,
    });
}));
// ========= Trending Product
const addTrendingProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield mediasection_service_1.MediaSectionService.addTrendingProduct(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand added successfully!",
        data: result,
    });
}));
const getTrendingProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mediasection_service_1.MediaSectionService.getTrendingProduct();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand get successfully!",
        data: result,
    });
}));
const getSingelTrendingProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.getSingelTrendingProduct(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand get successfully!",
        data: result,
    });
}));
const updateTrendingProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.updateTrendingProduct(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand update successfully!",
        data: result,
    });
}));
const deleteTrendingProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.deleteTrendingProduct(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand delete successfully!",
        data: result,
    });
}));
// =========
const addSlider = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield mediasection_service_1.MediaSectionService.addSlider(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Added successfully!",
        data: result,
    });
}));
const getSlider = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mediasection_service_1.MediaSectionService.getSlider();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Get successfully!",
        data: result,
    });
}));
const getSingelSlider = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.getSingeSlider(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore Slider get successfully!",
        data: result,
    });
}));
const updateSlider = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.updateSlider(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Update successfully!",
        data: result,
    });
}));
const deleteSlider = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.deleteSlider(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand delete successfully!",
        data: result,
    });
}));
// =======
// ========= Bestsellers
const addBestsellers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield mediasection_service_1.MediaSectionService.addBestsellers(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand added successfully!",
        data: result,
    });
}));
const getBestsellers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield mediasection_service_1.MediaSectionService.getBestsellers();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand get successfully!",
        data: result,
    });
}));
const getSingelBestsellers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.getSingelBestsellers(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand get successfully!",
        data: result,
    });
}));
const updateBestsellers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.updateBestsellers(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand update successfully!",
        data: result,
    });
}));
const deleteBestsellers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield mediasection_service_1.MediaSectionService.deleteBestsellers(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Explore brand delete successfully!",
        data: result,
    });
}));
exports.MediaSectionController = {
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
    // ==== Bestsellers
    addBestsellers,
    getBestsellers,
    getSingelBestsellers,
    updateBestsellers,
    deleteBestsellers,
    //   ==== Product Slider
    addSlider,
    getSlider,
    getSingelSlider,
    updateSlider,
    deleteSlider,
};

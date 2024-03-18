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
exports.BlogController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const blogs_service_1 = require("./blogs.service");
const blog_contstant_1 = require("./blog.contstant");
const pick_1 = __importDefault(require("../../../shared/pick"));
const pagination_1 = require("../../../constants/pagination");
const createBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const BlogData = req.body;
    const result = yield blogs_service_1.BlogService.createBlog(BlogData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blog created successfully!',
        data: result,
    });
}));
const getAllBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    const filters = (0, pick_1.default)(req.query, blog_contstant_1.iBlogFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield blogs_service_1.BlogService.getAllBlog(filters, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blogs fetched successfully',
        meta: {
            page: (_b = (_a = result.meta) === null || _a === void 0 ? void 0 : _a.page) !== null && _b !== void 0 ? _b : 0,
            limit: (_d = (_c = result.meta) === null || _c === void 0 ? void 0 : _c.limit) !== null && _d !== void 0 ? _d : 0,
            total: (_f = (_e = result.meta) === null || _e === void 0 ? void 0 : _e.total) !== null && _f !== void 0 ? _f : 0,
        },
        data: result.data,
    });
}));
const getSingelBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const BlogId = req.params.id;
    const result = yield blogs_service_1.BlogService.getSingleBlog(BlogId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blog fetched successfully',
        data: result,
    });
}));
const updateBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const BlogId = req.params.id;
    const BlogData = req.body;
    const result = yield blogs_service_1.BlogService.updateBlog(BlogId, BlogData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blog updated successfully!',
        data: result,
    });
}));
const deleteBlogs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const BlogId = req.params.id;
    const result = yield blogs_service_1.BlogService.deleteBlog(BlogId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blog delete successfully!',
        data: result,
    });
}));
exports.BlogController = {
    createBlog,
    getAllBlog,
    getSingelBlog,
    updateBlog,
    deleteBlogs,
};

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
exports.WishlistController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const wishlist_service_1 = require("./wishlist.service");
const addToWishlist = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlistData = req.body;
    const result = yield wishlist_service_1.WishListService.addToWishlist(wishlistData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book added to wishlist successfully!',
        data: result,
    });
}));
const getWishlist = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_service_1.WishListService.getWishlist();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Wishlist fetched successfully',
        data: result,
    });
}));
const getWishlistById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlistId = req.params.id;
    const result = yield wishlist_service_1.WishListService.getWishlistById(wishlistId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Wishlist fetched successfully',
        data: result,
    });
}));
const getWishlistByUserEmail = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.params.userEmail;
    const result = yield wishlist_service_1.WishListService.getWishlistByUserEmail(userEmail);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Wishlist fetched successfully',
        data: result,
    });
}));
const updateWishlist = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlistId = req.params.id;
    const wishlistData = req.body;
    const result = yield wishlist_service_1.WishListService.updateWishlist(wishlistId, wishlistData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Wishlist updated successfully!',
        data: result,
    });
}));
const deleteWishlist = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlistId = req.params.id;
    const result = yield wishlist_service_1.WishListService.deleteWishlist(wishlistId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Wishlist deleted successfully!',
        data: result,
    });
}));
exports.WishlistController = {
    addToWishlist,
    getWishlist,
    getWishlistById,
    getWishlistByUserEmail,
    updateWishlist,
    deleteWishlist,
};

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
exports.WishListService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const wishlist_model_1 = require("./wishlist.model");
const addToWishlist = (wishlist) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wishlistItem = new wishlist_model_1.WishList(wishlist);
        yield wishlistItem.save();
        return wishlistItem;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const getWishlist = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wishlist = yield wishlist_model_1.WishList.find();
        return wishlist;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const getWishlistById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wishlist = yield wishlist_model_1.WishList.findById(id);
        if (!wishlist) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Wishlist not found');
        }
        return wishlist;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const updateWishlist = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield wishlist_model_1.WishList.findOneAndUpdate({ _id: id }, payload, {
            new: true,
        });
        if (!result) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Wishlist not found');
        }
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const getWishlistByUserEmail = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wishlists = yield wishlist_model_1.WishList.find({ userEmail: userEmail });
        if (wishlists.length === 0) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Wishlist not found');
        }
        return wishlists;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const deleteWishlist = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield wishlist_model_1.WishList.findByIdAndDelete(id);
        if (!result) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Wishlist not found');
        }
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
exports.WishListService = {
    addToWishlist,
    getWishlist,
    getWishlistById,
    updateWishlist,
    getWishlistByUserEmail,
    deleteWishlist,
};

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
exports.productService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const product_model_1 = require("./product.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Product.create(payload);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Product.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const prouct = yield product_model_1.Product.findById({ _id: id });
        return prouct;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const product = yield product_model_1.Product.findByIdAndDelete({ _id: id });
        return product;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const updateProductById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!id)
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Id not found");
        const result = yield product_model_1.Product.findByIdAndUpdate({ _id: id }, payload, {
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
// =========
// ==== Create Categories ====
function createCategories(name, parent) {
    return __awaiter(this, void 0, void 0, function* () {
        let newCategory;
        if (parent) {
            // Find the parent category by name
            const parentCategory = yield product_model_1.Categories.findOne({ name: parent });
            if (!parentCategory) {
                throw new Error(`Parent Category with name '${parent}' not found`);
            }
            newCategory = yield product_model_1.Categories.create({
                name,
                parent: parentCategory.name,
                details: parentCategory.details,
            });
        }
        else {
            // Creating a main category
            newCategory = yield product_model_1.Categories.create({
                name,
                parent: null,
                details: "", // Add details for main categories if needed
            });
        }
        yield newCategory.save();
        return newCategory;
    });
}
// ====== Get All Categories ======
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Categories.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
//
const getMainCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Categories.find({ parent: null });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingelCategories = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield product_model_1.Categories.findById(id);
        if (!categories) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Categories not found");
        }
        return categories;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
// get single categories
//=========== get subcategories by name ===========
const getSubCategoriesByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield product_model_1.Categories.findOne({ name });
        if (!categories) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Categories not found");
        }
        return categories;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
// delete categories
const deleteCategories = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = (yield product_model_1.Categories.findByIdAndDelete({
            _id: id,
        }));
        return categories;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
// delete sub categories
const deleteSubCategories = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = (yield product_model_1.Categories.findByIdAndDelete({
            _id: id,
        }));
        return categories;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
// update categories
const updateCategories = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Categories.findOneAndUpdate({ _id: id }, payload, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
// ====== Coupon ======
const createCoupon = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coupon = new product_model_1.Coupon(payload);
        yield coupon.save();
        return coupon;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getAllCoupon = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Coupon.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingleCoupon = (couponId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coupon = yield product_model_1.Coupon.findById(couponId);
        if (!coupon) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Coupon not found");
        }
        return coupon;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const updateCoupon = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Coupon.findOneAndUpdate({ _id: id }, payload, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const deleteCoupon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.Coupon.findByIdAndDelete({ _id: id });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
exports.productService = {
    createProduct,
    getAllProduct,
    getProductById,
    deleteProductById,
    updateProductById,
    // ==== Create Categories ====
    createCategories,
    getMainCategories,
    // ====== Get All Categories ======
    getAllCategories,
    // ====== Get Sub Categories By Name ======
    getSubCategoriesByName,
    // ====== Get Single Categories ======
    getSingelCategories,
    // ====== Delete Categories ======
    deleteCategories,
    // ====== Delete Sub Categories ======
    deleteSubCategories,
    // ====== Update Categories ======
    updateCategories,
    // == Coupon ==
    createCoupon,
    getAllCoupon,
    getSingleCoupon,
    updateCoupon,
    deleteCoupon,
};

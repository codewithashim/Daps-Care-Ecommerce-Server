"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWishListValidator = exports.wishlistValidationSchema = void 0;
const zod_1 = require("zod");
exports.wishlistValidationSchema = zod_1.z.object({
    userEmail: zod_1.z.string(),
    bookId: zod_1.z.string(),
    bookTitle: zod_1.z.string(),
    bookAuthor: zod_1.z.string(),
});
exports.createWishListValidator = {
    wishlistValidationSchema: exports.wishlistValidationSchema,
};

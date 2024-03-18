"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistRoutes = void 0;
const express_1 = __importDefault(require("express"));
const wishlist_controller_1 = require("./wishlist.controller");
const router = express_1.default.Router();
router.post('/add-to-wishlist', wishlist_controller_1.WishlistController.addToWishlist);
router.get('/get-wishlist', wishlist_controller_1.WishlistController.getWishlist);
router.get('/get-wishlist/:id', wishlist_controller_1.WishlistController.getWishlistById);
router.patch('/update-wishlist/:id', wishlist_controller_1.WishlistController.updateWishlist);
router.get('/get-wishlist-by-user-email/:userEmail', wishlist_controller_1.WishlistController.getWishlistByUserEmail);
router.delete('/delete-wishlist/:id', wishlist_controller_1.WishlistController.deleteWishlist);
exports.WishlistRoutes = router;

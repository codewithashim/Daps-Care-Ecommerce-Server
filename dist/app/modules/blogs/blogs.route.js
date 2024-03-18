"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blogs_controller_1 = require("./blogs.controller");
const router = express_1.default.Router();
router.post('/create-blog', blogs_controller_1.BlogController.createBlog);
router.get('/get-singel-blog/:id', blogs_controller_1.BlogController.getSingelBlog);
router.patch('/update/:id', blogs_controller_1.BlogController.updateBlog);
router.delete('/delete/:id', blogs_controller_1.BlogController.deleteBlogs);
router.get('/', blogs_controller_1.BlogController.getAllBlog);
exports.BlogRoutes = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopularCategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const router = express_1.default.Router();
router.post('/create', category_controller_1.PopularCategoryController.addPopularCategory);
router.get('/get-all', category_controller_1.PopularCategoryController.getPopularCategories);
router.delete('/delete/:id', category_controller_1.PopularCategoryController.deletePopularCategory);
router.get('/get-single/:id', category_controller_1.PopularCategoryController.getSinglePopularCategory);
router.patch('/update/:id', category_controller_1.PopularCategoryController.updatePopularCategory);
exports.PopularCategoryRoutes = router;

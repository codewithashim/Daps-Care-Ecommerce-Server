"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopularCategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const homeproductslider_controller_1 = require("./homeproductslider.controller");
const router = express_1.default.Router();
router.post('/create', homeproductslider_controller_1.PopularCategoryController.addPopularCategory);
router.get('/get-all', homeproductslider_controller_1.PopularCategoryController.getPopularCategories);
router.delete('/delete/:id', homeproductslider_controller_1.PopularCategoryController.deletePopularCategory);
router.get('/get-single/:id', homeproductslider_controller_1.PopularCategoryController.getSinglePopularCategory);
router.patch('/update/:id', homeproductslider_controller_1.PopularCategoryController.updatePopularCategory);
exports.PopularCategoryRoutes = router;

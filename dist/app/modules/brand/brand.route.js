"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandRoutes = void 0;
const express_1 = __importDefault(require("express"));
const brand_controller_1 = require("./brand.controller");
const router = express_1.default.Router();
router.post("/create", brand_controller_1.BrandController.createBrand);
router.get("/get-all", brand_controller_1.BrandController.getAllBrand);
router.get("/:id", brand_controller_1.BrandController.getSingleBrand);
router.delete("/delete/:id", brand_controller_1.BrandController.deleteBrand);
router.patch("/update/:id", brand_controller_1.BrandController.updateBrand);
exports.BrandRoutes = router;

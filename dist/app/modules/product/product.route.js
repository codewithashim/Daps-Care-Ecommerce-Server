"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/create-product", product_controller_1.productController.createProduct);
router.get("/get-all-product", product_controller_1.productController.getAllProducts);
router.get("/get-singel/:id", product_controller_1.productController.getProductById);
router.delete("/delete-product/:id", product_controller_1.productController.deleteProductById);
router.patch("/update-product/:id", product_controller_1.productController.updateProductById);
router.get("/get-categories/:name", product_controller_1.productController.getSingelCategoriesName);
router.delete("/delete-product/:id", product_controller_1.productController.deleteProductById);
router.patch("/update-product/:id", product_controller_1.productController.updateProductById);
// ==== Create Categories ====
router.post("/create-categories", product_controller_1.productController.createCategories);
// ==== Create Sub Categories ====
router.post("/create-sub-categories", product_controller_1.productController.createSubCategories);
// ====== Get All Categories ======
router.get("/get-all-categories", product_controller_1.productController.getAllCategories);
// ====== Get Main Categories ======
router.get("/get-main-categories", product_controller_1.productController.getMainCategories);
// ====== Get Single Categories ======
router.get("/get-singel-categories/:id", product_controller_1.productController.getSingelCategories);
// ====== Delete Categories ======
router.delete("/delete-categories/:id", product_controller_1.productController.deleteCategories);
// ====== Delete SubCategories ======
router.delete("/delete-subcategories/:id", product_controller_1.productController.deleteSubCategories);
// ====== Update Categories ======
router.patch("/update-categories/:id", product_controller_1.productController.updateCategories);
//== Coupon Routes
router.post("/create-coupon", product_controller_1.productController.createCoupon);
router.get("/get-all-coupon", product_controller_1.productController.getAllCoupon);
router.get("/get-singel-coupon/:id", product_controller_1.productController.getSingelCoupon);
router.patch("/update-coupon/:id", product_controller_1.productController.updateCoupon);
router.delete("/delete-coupon/:id", product_controller_1.productController.deleteCoupon);
exports.ProductRoutes = router;

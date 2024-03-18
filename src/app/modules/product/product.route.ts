import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/create-product", productController.createProduct);

router.get("/get-all-product", productController.getAllProducts);

router.get("/get-singel/:id", productController.getProductById);

router.delete("/delete-product/:id", productController.deleteProductById);

router.patch("/update-product/:id", productController.updateProductById);


router.get("/get-categories/:name", productController.getSingelCategoriesName);

router.delete("/delete-product/:id", productController.deleteProductById);

router.patch("/update-product/:id", productController.updateProductById);

// ==== Create Categories ====
router.post("/create-categories", productController.createCategories);

// ==== Create Sub Categories ====
router.post("/create-sub-categories", productController.createSubCategories);

// ====== Get All Categories ======
router.get("/get-all-categories", productController.getAllCategories);

// ====== Get Main Categories ======
router.get("/get-main-categories", productController.getMainCategories);

 
// ====== Get Single Categories ======
router.get("/get-singel-categories/:id", productController.getSingelCategories);

// ====== Delete Categories ======
router.delete("/delete-categories/:id", productController.deleteCategories);

// ====== Delete SubCategories ======
router.delete(
  "/delete-subcategories/:id",
  productController.deleteSubCategories
);

// ====== Update Categories ======
router.patch("/update-categories/:id", productController.updateCategories);


//== Coupon Routes
router.post("/create-coupon", productController.createCoupon);
router.get("/get-all-coupon", productController.getAllCoupon);
router.get("/get-singel-coupon/:id", productController.getSingelCoupon);
router.patch("/update-coupon/:id", productController.updateCoupon);
router.delete("/delete-coupon/:id", productController.deleteCoupon);

export const ProductRoutes = router;

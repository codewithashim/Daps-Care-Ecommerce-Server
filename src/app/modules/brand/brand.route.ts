import express from "express";
import { BrandController } from "./brand.controller";

const router = express.Router();

router.post("/create", BrandController.createBrand);
router.get("/get-all", BrandController.getAllBrand);
router.get("/:id", BrandController.getSingleBrand);
router.delete("/delete/:id", BrandController.deleteBrand);
router.patch("/update/:id", BrandController.updateBrand);

export const BrandRoutes = router;

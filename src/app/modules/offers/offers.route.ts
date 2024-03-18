import express from "express";
import { BannersController } from "./offers.controller";

const router = express.Router();

router.post("/create", BannersController.createBanners);
router.get("/get-all", BannersController.getAllBanners);
router.get("/:id", BannersController.getSingleBanners);
router.delete("/delete/:id", BannersController.deleteBanners);
router.patch("/update/:id", BannersController.updateBanners);

export const BannersRoutes = router;


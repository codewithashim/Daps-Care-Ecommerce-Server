"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const offers_controller_1 = require("./offers.controller");
const router = express_1.default.Router();
router.post("/create", offers_controller_1.BannersController.createBanners);
router.get("/get-all", offers_controller_1.BannersController.getAllBanners);
router.get("/:id", offers_controller_1.BannersController.getSingleBanners);
router.delete("/delete/:id", offers_controller_1.BannersController.deleteBanners);
router.patch("/update/:id", offers_controller_1.BannersController.updateBanners);
exports.BannersRoutes = router;

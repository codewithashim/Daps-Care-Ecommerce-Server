"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoutes = void 0;
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("./car.controller");
const router = express_1.default.Router();
router.post("/create", car_controller_1.CarController.createCar);
router.get("/get-all", car_controller_1.CarController.getAllCar);
router.get("/:id", car_controller_1.CarController.getSingleCar);
router.delete("/delete/:id", car_controller_1.CarController.deleteCar);
router.patch("/update/:id", car_controller_1.CarController.updateCar);
exports.CarRoutes = router;

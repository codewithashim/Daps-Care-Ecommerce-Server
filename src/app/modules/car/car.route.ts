import express from "express";
import { CarController } from "./car.controller";

const router = express.Router();

router.post("/create", CarController.createCar);
router.get("/get-all", CarController.getAllCar);
router.get("/:id", CarController.getSingleCar);
router.delete("/delete/:id", CarController.deleteCar);
router.patch("/update/:id", CarController.updateCar);

export const CarRoutes = router;

import express from "express";
import { ProcessorController } from "./processor.controller";

const router = express.Router();

router.post("/create", ProcessorController.createProcessor);
router.get("/get-all", ProcessorController.getAllProcessor);
router.get("/:id", ProcessorController.getSingleProcessor);
router.delete("/delete/:id", ProcessorController.deleteProcessor);
router.patch("/update/:id", ProcessorController.updateProcessor);

export const ProcessorRoutes = router;

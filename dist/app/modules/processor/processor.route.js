"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const processor_controller_1 = require("./processor.controller");
const router = express_1.default.Router();
router.post("/create", processor_controller_1.ProcessorController.createProcessor);
router.get("/get-all", processor_controller_1.ProcessorController.getAllProcessor);
router.get("/:id", processor_controller_1.ProcessorController.getSingleProcessor);
router.delete("/delete/:id", processor_controller_1.ProcessorController.deleteProcessor);
router.patch("/update/:id", processor_controller_1.ProcessorController.updateProcessor);
exports.ProcessorRoutes = router;

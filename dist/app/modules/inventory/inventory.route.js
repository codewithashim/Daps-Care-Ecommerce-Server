"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const inventory_controller_1 = require("./inventory.controller");
const router = express_1.default.Router();
router.post('/create', inventory_controller_1.InventoryController.addInventory);
router.get('/get-all', inventory_controller_1.InventoryController.getInventories);
router.delete('/delete/:id', inventory_controller_1.InventoryController.deleteInventory);
router.get('/get-single/:id', inventory_controller_1.InventoryController.getSingleInventory);
router.patch('/update/:id', inventory_controller_1.InventoryController.updateInventory);
exports.InventoryRoutes = router;

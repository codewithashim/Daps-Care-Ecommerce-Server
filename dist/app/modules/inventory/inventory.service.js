"use strict";
// inventory.service.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const inventory_model_1 = require("./inventory.model");
const addInventory = (Id, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the inventory item already exists for the book
    let inventoryItem = yield inventory_model_1.Inventory.findOne({ _id: Id });
    if (inventoryItem) {
        // Update the existing inventory item
        inventoryItem.quantity += quantity;
    }
    else {
        // Create a new inventory item
        inventoryItem = new inventory_model_1.Inventory({
            _id: Id,
            quantity,
        });
    }
    yield inventoryItem.save();
    return inventoryItem;
});
const getInventories = () => __awaiter(void 0, void 0, void 0, function* () {
    const inventories = yield inventory_model_1.Inventory.find().populate("product");
    return inventories;
});
const getSingleInventory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const inventoryItem = yield inventory_model_1.Inventory.findOne({ _id: id }).populate("book");
    return inventoryItem;
});
const deleteInventory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const inventoryItem = yield inventory_model_1.Inventory.findOneAndDelete({
        _id: id,
    });
    return inventoryItem;
});
const updateInventory = (Id, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const inventoryItem = yield inventory_model_1.Inventory.findOne({ _id: Id });
    if (inventoryItem) {
        inventoryItem.quantity = quantity;
        yield inventoryItem.save();
    }
    return inventoryItem;
});
exports.InventoryService = {
    addInventory,
    getInventories,
    getSingleInventory,
    deleteInventory,
    updateInventory,
};

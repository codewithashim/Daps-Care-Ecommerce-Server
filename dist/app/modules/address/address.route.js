"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRoutes = void 0;
const express_1 = __importDefault(require("express"));
const address_controller_1 = require("./address.controller");
const router = express_1.default.Router();
router.post("/create", address_controller_1.AddressController.createAddress);
router.get("/get-singel/:id", address_controller_1.AddressController.getAddressById);
router.get("/get-address/:email", address_controller_1.AddressController.getAddressByEmail);
router.patch("/update/:id", address_controller_1.AddressController.updateAddress);
router.delete("/delete/:id", address_controller_1.AddressController.deleteAddress);
router.get("/get-address", address_controller_1.AddressController.getAllAddresses);
exports.AddressRoutes = router;

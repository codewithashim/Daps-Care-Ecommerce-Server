import express from "express";
import { AddressController } from "./address.controller";

const router = express.Router();

router.post("/create", AddressController.createAddress);
router.get("/get-singel/:id", AddressController.getAddressById);
router.get("/get-address/:email", AddressController.getAddressByEmail);
router.patch("/update/:id", AddressController.updateAddress);
router.delete("/delete/:id", AddressController.deleteAddress);
router.get("/get-address", AddressController.getAllAddresses);

export const AddressRoutes = router;

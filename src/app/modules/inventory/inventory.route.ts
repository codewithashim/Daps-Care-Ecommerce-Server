import express from 'express';
import { InventoryController } from './inventory.controller';

const router = express.Router();

router.post('/create', InventoryController.addInventory);

router.get('/get-all', InventoryController.getInventories);

router.delete('/delete/:id', InventoryController.deleteInventory);

router.get('/get-single/:id', InventoryController.getSingleInventory);

router.patch('/update/:id', InventoryController.updateInventory);

export const InventoryRoutes = router;
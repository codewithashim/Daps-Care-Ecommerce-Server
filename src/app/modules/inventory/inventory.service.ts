// inventory.service.ts

import { IInventory } from "./inventory.interface";
import { Inventory } from "./inventory.model";

const addInventory = async (
  Id: string,
  quantity: number
): Promise<IInventory> => {
  // Check if the inventory item already exists for the book
  let inventoryItem = await Inventory.findOne({ _id: Id });

  if (inventoryItem) {
    // Update the existing inventory item
    inventoryItem.quantity += quantity;
  } else {
    // Create a new inventory item
    inventoryItem = new Inventory({
      _id: Id,
      quantity,
    });
  }

  await inventoryItem.save();
  return inventoryItem;
};

const getInventories = async (): Promise<IInventory[]> => {
  const inventories = await Inventory.find().populate("product");
  return inventories;
};

const getSingleInventory = async (id: string): Promise<IInventory | null> => {
  const inventoryItem = await Inventory.findOne({ _id: id }).populate("book");
  return inventoryItem;
};

const deleteInventory = async (id: string): Promise<IInventory | null> => {
  const inventoryItem = await Inventory.findOneAndDelete({
    _id: id,
  });
  return inventoryItem;
};

const updateInventory = async (
  Id: string,
  quantity: number
): Promise<IInventory | null> => {
  const inventoryItem = await Inventory.findOne({ _id: Id });

  if (inventoryItem) {
    inventoryItem.quantity = quantity;
    await inventoryItem.save();
  }

  return inventoryItem;
};

export const InventoryService = {
  addInventory,
  getInventories,
  getSingleInventory,
  deleteInventory,
  updateInventory,
};

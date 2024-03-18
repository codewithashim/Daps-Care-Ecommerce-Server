import { Model } from "mongoose";
import { IProduct } from "../product/product.interface";

export type IInventory = {
    product: IProduct;
    quantity: number;
}

export type InventoryModel = Model<IInventory, Record<string, unknown>>;

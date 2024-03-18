import { Schema, model } from 'mongoose';
import { IInventory, InventoryModel } from './inventory.interface';

const InventorySchema = new Schema<IInventory, InventoryModel>(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Products',
        },
        quantity: {
            type: Number,
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }

);

export const Inventory = model<IInventory, InventoryModel>('Inventory', InventorySchema);

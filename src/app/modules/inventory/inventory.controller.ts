import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IInventory } from './inventory.interface';
import { InventoryService } from './inventory.service';

// == add inventory function == inventory.controller.ts

const addInventory: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const bookId = req.params.id;
        const { quantity } = req.body;
        const result = await InventoryService.addInventory(bookId, quantity);
        sendResponse<IInventory>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Inventory added successfully!',
            data: result,
        });
    }
)

// == get inventory function == inventory.controller.ts

const getInventories: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const result = await InventoryService.getInventories();

        sendResponse<IInventory[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Inventory fetched successfully!',
            data: result,
        });
    }
)

// get single inventory function . inventory.controller.ts

const getSingleInventory: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const bookId = req.params.id;
        const result = await InventoryService.getSingleInventory(bookId);
        sendResponse<IInventory>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Inventory fetched successfully!',
            data: result,
        });
    }
)

// delete inventory function . inventory.controller.ts

const deleteInventory: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const bookId = req.params.id;
        const result = await InventoryService.deleteInventory(bookId);
        sendResponse<IInventory>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Inventory deleted successfully!',
            data: result,
        });
    }
)

// update inventory function . inventory.controller.ts

const updateInventory: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const bookId = req.params.id;
        const { quantity } = req.body;
        const result = await InventoryService.updateInventory(bookId, quantity);
        sendResponse<IInventory>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Inventory updated successfully!',
            data: result,
        });
    }
)

export const InventoryController = {
    addInventory,
    getInventories,
    getSingleInventory,
    deleteInventory,
    updateInventory

}
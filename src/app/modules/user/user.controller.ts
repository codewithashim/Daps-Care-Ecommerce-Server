import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { UserService } from './user.service';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';
import httpStatus from 'http-status';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;
    const result = await UserService.createUser(userData);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

const getAllUsers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.getAllUser();
    sendResponse<IUser[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'users fetched successfully!',
      data: result,
    });
  }
);

const getUserById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await UserService.getUserById(id);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user fetched successfully!',
      data: result,
    });
  }
);

const getUserByEmail: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userEmail = req.params.email;
    const result: IUser | null = await UserService.getUserByEmail(userEmail);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user fetched successfully!',
      data: result,
    });
  }
);

// == Get admin form the user by email and is admin true  == user.controller.ts 

const getAdminByEmail: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userEmail = req.params.email;
    const result: IUser | null = await UserService.getAdminByEmail(userEmail);
    
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user fetched successfully!',
      data: result,
    });
  }
)


export const UserController = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  getAdminByEmail
};

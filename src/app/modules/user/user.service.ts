import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import httpStatus from 'http-status';

const createUser = async (payload: IUser): Promise<IUser> => {
  try {
    const user = new User(payload);
    await user.save();
    return user;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getAllUser = async (): Promise<IUser[]> => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getUserById = async (id: string): Promise<IUser | null> => {
  try {
    const user = await User.findById({ _id: id });
    return user;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getUserByEmail = async (email: string): Promise<IUser | null> => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

// == Get admin form the user by email and is admin true  == user.service.ts

interface IUserWithAdmin extends IUser {
  isAdmin: boolean;
}

const getAdminByEmail = async (email: string): Promise<IUserWithAdmin | null> => {
  interface IUserWithAdmin extends IUser {
    isAdmin: boolean;
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return null;
    }

    const isAdmin = user.get('isAdmin');

    interface IUserWithAdmin extends IUser {
      isAdmin: boolean;
    }

    const userWithAdmin: IUserWithAdmin = { ...user.toObject(), isAdmin };

    return userWithAdmin;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

export const UserService = {
  createUser,
  getAllUser,
  getUserById,
  getUserByEmail,
  getAdminByEmail,
}

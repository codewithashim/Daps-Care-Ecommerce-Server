/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IUser = {
  name: string;
  email: string;
  role: string;
  phone:string
};

export type UserModel = Model<IUser, Record<string, unknown>>;

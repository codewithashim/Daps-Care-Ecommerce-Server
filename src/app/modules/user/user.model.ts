/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser, Record<string, never>>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
    },
    phone :{
      type: String,
    }

  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);


export const User = model<IUser, UserModel>('User', userSchema);

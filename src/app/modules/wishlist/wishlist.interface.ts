import { Model } from 'mongoose';

export type IWishList = {
  userEmail: string;
  bookId: string;
  bookTitle: string;
  bookAuthor: string;
};

export type IWishListModel = Model<IWishList, Record<string, unknown>>;

import { Schema, model } from 'mongoose';
import { IWishList, IWishListModel } from './wishlist.interface';

const wishlistSchema = new Schema<IWishList, Record<string, never>>(
  {
    userEmail: { type: String, required: true },
    bookId: { type: String, required: true },
    bookTitle: { type: String, required: true },
    bookAuthor: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const WishList = model<IWishList, IWishListModel>(
  'WishList',
  wishlistSchema
);

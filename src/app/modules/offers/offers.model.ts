import { Schema, model } from "mongoose";
import { IBanners, BannersModal } from "./offers.interface";

const BannersSchema = new Schema<IBanners, BannersModal>(
  {
   bannerOne: {
    type:String,
   },
   bannerTow: {
    type:String,
   },
   bannerThree: {
    type:String,
   },
   bannerFour: {
    type:String,
   },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Banners = model<IBanners, BannersModal>("Banners", BannersSchema);

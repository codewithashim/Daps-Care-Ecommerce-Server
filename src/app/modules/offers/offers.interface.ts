import { Model } from "mongoose";

export type IBanners = {
  bannerOne: string;
  bannerTow: string;
  bannerThree: string;
  bannerFour: string;
};


export type BannersModal = Model<IBanners, Record<string, unknown>>;

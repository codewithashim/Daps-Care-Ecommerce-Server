import { Model } from "mongoose";

export type IBrand = {
  brandName: string;
};

export type BrandModal = Model<IBrand, Record<string, unknown>>;

import { Schema, model } from "mongoose";
import { IBrand, BrandModal } from "./brand.interface";

const BrandSchema = new Schema<IBrand, BrandModal>(
  {
    brandName: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Brand = model<IBrand, BrandModal>("Brands", BrandSchema);

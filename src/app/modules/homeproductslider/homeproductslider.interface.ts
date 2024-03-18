import { Model } from "mongoose";

export type IPopularCategory = {
  categories: any;
  image: string;
  detail: string;
};

export type PopularCategoryModel = Model<
  IPopularCategory,
  Record<string, unknown>
>;

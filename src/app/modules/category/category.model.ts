import { Schema, model } from 'mongoose';
import { IPopularCategory, PopularCategoryModel } from './category.interface';

const popularCategorySchema = new Schema<
  IPopularCategory,
  PopularCategoryModel
>({
  categories: {
    type: String,
  },
  image: {
    type: String,
  },
  detail: {
    type: String,
  },
});

export const PopularCategory = model<IPopularCategory, PopularCategoryModel>(
  'PopularCategory',
  popularCategorySchema
);

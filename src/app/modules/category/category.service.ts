import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { PopularCategory } from './category.model';
import { IPopularCategory } from './category.interface';

// ==== add popular category =====

const addPopularCategory = async (
  payload: IPopularCategory
): Promise<IPopularCategory> => {
  try {
    const popularCategory = new PopularCategory(payload);
    await popularCategory.save();
    return popularCategory;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

// ==== get all popular category =====

const getPopularCategories = async (): Promise<IPopularCategory[]> => {
  try {
    const result = await PopularCategory.find().populate('categories');
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

// ==== delete popular category =====

const deletePopularCategory = async (
  id: string
): Promise<IPopularCategory | null> => {
  try {
    const result = await PopularCategory.findByIdAndDelete({_id:id});
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

// ==== get single popular category =====

const getSinglePopularCategory = async (
  id: string
): Promise<IPopularCategory | null> => {
  try {
    const result = await PopularCategory.findById({_id:id}).populate('categories');
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

// ==== update popular category =====

const updatePopularCategory = async (
  id: string,
  payload: Partial<IPopularCategory>
): Promise<IPopularCategory | null> => {
  try {
    const result = await PopularCategory.findByIdAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      }
    );
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

export const PopularCategoryService = {
  addPopularCategory,
  getPopularCategories,
  deletePopularCategory,
  getSinglePopularCategory,
  updatePopularCategory,
};

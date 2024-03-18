import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { SortOrder } from "mongoose";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { iBlogSearchableFields } from "./blog.contstant";
import { IBlog, IBlogFilter } from "./blogs.interface";
import { Blog } from "./blogs.model";

const createBlog = async (payload: IBlog): Promise<IBlog> => {
  try {
    const BlogData = new Blog(payload);
    await BlogData.save();
    return BlogData;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAllBlog = async (
  filters: IBlogFilter,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBlog[]>> => {
  const { skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: iBlogSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Blog.find(whereConditions)
    .sort(sortConditions)
    .skip(skip);

  return {
    data: result,
  };
};

const getSingleBlog = async (BlogId: string): Promise<IBlog> => {
  const BlogSingel = await Blog.findById(BlogId);
  if (!BlogSingel) {
    throw new ApiError(httpStatus.NOT_FOUND, "Blog not found");
  }
  return BlogSingel;
};

const updateBlog = async (
  id: string,
  payload: Partial<IBlog>
): Promise<IBlog | null> => {
  const result = await Blog.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBlog = async (id: string): Promise<IBlog | null> => {
  const result = await Blog.findByIdAndDelete({
    _id: id,
  });
  return result;
};

export const BlogService = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};

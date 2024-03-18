import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { ICategories, ICoupon, IProduct } from "./product.interface";
import { Categories, Coupon, Product } from "./product.model";

const createProduct = async (payload: IProduct): Promise<IProduct> => {
  try {
    const result = await Product.create(payload);
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAllProduct = async (): Promise<IProduct[]> => {
  try {
    const result = await Product.find()
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getProductById = async (id: string): Promise<IProduct | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const prouct = await Product.findById({ _id: id });
    return prouct;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const deleteProductById = async (id: string): Promise<IProduct | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const product = await Product.findByIdAndDelete({ _id: id });
    return product;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const updateProductById = async (
  id: string,
  payload: IProduct
): Promise<IProduct | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const result = await Product.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
    });

    if (!result) {
      throw new ApiError(httpStatus.NOT_FOUND, "Product not found");
    }

    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};
// =========
// ==== Create Categories ====

async function createCategories(
  name: string,
  parent: string | null
): Promise<ICategories> {
  let newCategory;

  if (parent) {
    // Find the parent category by name
    const parentCategory = await Categories.findOne({ name: parent });

    if (!parentCategory) {
      throw new Error(`Parent Category with name '${parent}' not found`);
    }

    newCategory = await Categories.create({
      name,
      parent: parentCategory.name,
      details: parentCategory.details,
    });
  } else {
    // Creating a main category
    newCategory = await Categories.create({
      name,
      parent: null,
      details: "", // Add details for main categories if needed
    });
  }

  await newCategory.save();

  return newCategory;
}

// ====== Get All Categories ======
const getAllCategories = async (): Promise<ICategories[]> => {
  try {
    const result = await Categories.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

//
const getMainCategories = async (): Promise<ICategories[]> => {
  try {
    const result = await Categories.find({ parent: null });
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSingelCategories = async (id: string): Promise<ICategories> => {
  try {
    const categories = await Categories.findById(id);
    if (!categories) {
      throw new ApiError(httpStatus.NOT_FOUND, "Categories not found");
    }
    return categories;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

// get single categories

//=========== get subcategories by name ===========

const getSubCategoriesByName = async (name: string): Promise<ICategories> => {
  try {
    const categories = await Categories.findOne({ name });
    if (!categories) {
      throw new ApiError(httpStatus.NOT_FOUND, "Categories not found");
    }
    return categories;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

// delete categories

const deleteCategories = async (id: string): Promise<ICategories | null> => {
  try {
    const categories = (await Categories.findByIdAndDelete({
      _id: id,
    })) as unknown as ICategories | null;
    return categories;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

// delete sub categories

const deleteSubCategories = async (id: string): Promise<ICategories | null> => {
  try {
    const categories = (await Categories.findByIdAndDelete({
      _id: id,
    })) as unknown as ICategories | null;
    return categories;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

// update categories

const updateCategories = async (id: string, payload: Partial<ICategories>) => {
  try {
    const result = await Categories.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

// ====== Coupon ======

const createCoupon = async (payload: ICoupon): Promise<ICoupon> => {
  try {
    const coupon = new Coupon(payload);
    await coupon.save();
    return coupon;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getAllCoupon = async (): Promise<ICoupon[]> => {
  try {
    const result = await Coupon.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSingleCoupon = async (couponId: string): Promise<ICoupon> => {
  try {
    const coupon = await Coupon.findById(couponId);
    if (!coupon) {
      throw new ApiError(httpStatus.NOT_FOUND, "Coupon not found");
    }
    return coupon;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const updateCoupon = async (
  id: string,
  payload: Partial<ICoupon>
): Promise<ICoupon | null> => {
  try {
    const result = await Coupon.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const deleteCoupon = async (id: string): Promise<ICoupon | null> => {
  try {
    const result = await Coupon.findByIdAndDelete({_id:id});
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

export const productService = {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProductById,
  updateProductById,

  // ==== Create Categories ====
  createCategories,

  getMainCategories,

  // ====== Get All Categories ======
  getAllCategories,

  // ====== Get Sub Categories By Name ======
  getSubCategoriesByName,

  // ====== Get Single Categories ======
  getSingelCategories,

  // ====== Delete Categories ======
  deleteCategories,

  // ====== Delete Sub Categories ======
  deleteSubCategories,

  // ====== Update Categories ======
  updateCategories,

  // == Coupon ==
  createCoupon,
  getAllCoupon,
  getSingleCoupon,
  updateCoupon,
  deleteCoupon,
};

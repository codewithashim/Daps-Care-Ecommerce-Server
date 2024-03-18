import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ICategories, ICoupon, IProduct } from "./product.interface";
import { productService } from "./product.service";
import { Categories } from "./product.model";

const createProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;

    const result = await productService.createProduct(data);

    sendResponse<IProduct>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "product created successfully!",
      data: result,
    });
  }
);

const getAllProducts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await productService.getAllProduct();

    sendResponse<IProduct[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "product fetched successfully!",
      data: result,
    });
  }
);

const getProductById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await productService.getProductById(id);

    sendResponse<IProduct>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "product fetched successfully!",
      data: result,
    });
  }
);

const deleteProductById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await productService.deleteProductById(id);

    sendResponse<IProduct>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "product deleted successfully!",
      data: result,
    });
  }
);

const updateProductById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const result = await productService.updateProductById(id, data);

    if (!result) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Product not found",
      });
    }

    sendResponse<IProduct>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "product updated successfully!",
      data: result,
    });
  }
);

// ==============
export interface CreateCategoriesData {
  name: string;
  parentCategories: ICategories | null;
}

const createCategories: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data: CreateCategoriesData = req.body;

    const result = await productService.createCategories(
      data.name,
      data.parentCategories?._id || null
    );

    sendResponse<ICategories>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Categories created successfully!",
      data: result,
    });
  }
);

// ========= Create SubCategories =========

const createSubCategories: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { name, parent } = req.body;

    const result = await productService.createCategories(name, parent);

    sendResponse<ICategories>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "SubCategories created successfully!",
      data: result,
    });
  }
);

// ========= Get All Categories =========

const getAllCategories: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await productService.getAllCategories();

    sendResponse<ICategories[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Categories fetched successfully!",
      data: result,
    });
  }
);

const getMainCategories: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await productService.getMainCategories();

    console.log(result);

    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Categories fetched successfully!",
      data: result,
    });
  }
);

// get singel categories name

const getSingelCategoriesName: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const name = req.params.name;
    const result = await productService.getSingelCategories(name);

    sendResponse<ICategories>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Categories fetched successfully!",
      data: result,
    });
  }
);

// get singel categories

const getSingelCategories: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await productService.getSingelCategories(id);

    sendResponse<ICategories>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Categories fetched successfully!",
      data: result,
    });
  }
);

// delete categories
const deleteCategories: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await productService.deleteCategories(id);

    sendResponse<ICategories>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Categories deleted successfully!",
      data: result,
    });
  }
);

const deleteSubCategories: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await productService.deleteCategories(id);

    sendResponse<ICategories>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Categories deleted successfully!",
      data: result,
    });
  }
);

// update categories

const updateCategories: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const result = await productService.updateCategories(id, data);

    sendResponse<ICategories>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Categories updated successfully!",
      data: result,
    });
  }
);

// ====== coupon ======

const createCoupon: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const couponData = req.body;
    const result = await productService.createCoupon(couponData);
    sendResponse<ICoupon>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Coupon created successfully!",
      data: result,
    });
  }
);

const getAllCoupon = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.getAllCoupon();
  sendResponse<ICoupon[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Coupon fetched successfully",
    data: result,
  });
});

const getSingelCoupon = catchAsync(async (req: Request, res: Response) => {
  const couponId = req.params.id;
  const result = await productService.getSingleCoupon(couponId);
  sendResponse<ICoupon>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Coupon fetched successfully",
    data: result,
  });
});

const updateCoupon: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const couponId = req.params.id;
    const couponData = req.body;
    const result = await productService.updateCoupon(couponId, couponData);
    sendResponse<ICoupon>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Coupon updated successfully!",
      data: result,
    });
  }
);

const deleteCoupon: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const couponId = req.params.id;
    const result = await productService.deleteCoupon(couponId);
    sendResponse<ICoupon>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Coupon delete successfully!",
      data: result,
    });
  }
);

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  //=====
  createCategories,

  // ========= Create SubCategories =========
  createSubCategories,

  // ======== get categories name ========

  getSingelCategoriesName,

  // ========= Get All Categories =========
  getAllCategories,
  getMainCategories,

  // get singel categories
  getSingelCategories,

  // delete categories
  deleteCategories,
  deleteSubCategories,

  // update categories
  updateCategories,

  // Coupon
  createCoupon,
  getAllCoupon,
  getSingelCoupon,
  updateCoupon,
  deleteCoupon,
};

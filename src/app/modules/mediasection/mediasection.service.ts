import httpStatus from "http-status";
import { IMedia, ISlider, IStory } from "./mediasection.interface";
import { Bestsellers, BrandExplore, Slider, Story, TrendingProduct } from "./mediasection.model";
import ApiError from "../../../errors/ApiError";

// ===== explore brand =======
const addExploreBrand = async (payload: IMedia): Promise<IMedia> => {
  try {
    const result = await BrandExplore.create(payload);
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getExploreBrand = async (): Promise<IMedia[]> => {
  try {
    const result = await BrandExplore.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSingelExploreBrand = async (id: string): Promise<IMedia | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const prouct = await BrandExplore.findById({ _id: id });
    return prouct;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const deleteExploreBrand = async (id: string): Promise<IMedia | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const product = await BrandExplore.findByIdAndDelete({ _id: id });
    return product;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const updateExploreBrand = async (
  id: string,
  payload: IMedia
): Promise<IMedia | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const result = await BrandExplore.findByIdAndUpdate({ _id: id }, payload, {
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

// ======= Story ===========
const addStory = async (payload: IStory): Promise<IStory> => {
  try {
    const result = await Story.create(payload);
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getStory = async (): Promise<IStory[] | null> => {
  try {
    const result = await Story.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSingelStory = async (id: string): Promise<IStory | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const prouct = await Story.findById({ _id: id });
    return prouct;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const deleteStory = async (id: string): Promise<IStory | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const product = await Story.findByIdAndDelete({ _id: id });
    return product;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const updateStory = async (
  id: string,
  payload: IMedia
): Promise<IMedia | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const result = await Story.findByIdAndUpdate({ _id: id }, payload, {
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

// ====== TrendingProduct ======
const addTrendingProduct = async (payload: IMedia): Promise<IMedia> => {
  try {
    const result = await TrendingProduct.create(payload);
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getTrendingProduct = async (): Promise<IMedia[]> => {
  try {
    const result = await TrendingProduct.find().populate('product')
    return result;
  } catch (error) {
    console.log(error);
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSingelTrendingProduct = async (id: string): Promise<IMedia | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const prouct = await TrendingProduct.findById({ _id: id }).populate('product')
    return prouct;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const deleteTrendingProduct = async (id: string): Promise<IMedia | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const product = await TrendingProduct.findByIdAndDelete({ _id: id });
    return product;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const updateTrendingProduct = async (
  id: string,
  payload: IMedia
): Promise<IMedia | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const result = await TrendingProduct.findByIdAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      }
    );

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

// ===== Slider
const addSlider = async (payload: ISlider): Promise<ISlider> => {
  try {
    const result = await Slider.create(payload);
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSlider = async (): Promise<ISlider[]> => {
  try {
    const result = await Slider.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};



const getSingeSlider = async (id: string): Promise<ISlider | null> => {
    try {
        if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
        const prouct = await Slider.findById({ _id: id });
        return prouct;
    } catch (error) {
        throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            "Internal Server Error"
        );
    }
}

const deleteSlider = async (id: string): Promise<ISlider | null> => {
    try {
        if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
        const product = await Slider.findByIdAndDelete({ _id: id });
        return product;
    } catch (error) {
        throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            "Internal Server Error"
        );
    }
}

const updateSlider = async (
    id: string,
    payload: ISlider
): Promise<ISlider | null> => {
    try {
        if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
        const result = await Slider.findByIdAndUpdate(
            { _id: id },
            payload,
            {
                new: true,
            }
        );

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
}

// ============

// ====== BestSealler ======
const addBestsellers = async (payload: IMedia): Promise<IMedia> => {
  try {
    const result = await Bestsellers.create(payload);
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getBestsellers = async (): Promise<IMedia[]> => {
  try {
    const result = await Bestsellers.find() 
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const getSingelBestsellers = async (id: string): Promise<IMedia | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const prouct = await Bestsellers.findById({ _id: id }) 
    return prouct;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const deleteBestsellers = async (id: string): Promise<IMedia | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const product = await Bestsellers.findByIdAndDelete({ _id: id });
    return product;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal Server Error"
    );
  }
};

const updateBestsellers = async (
  id: string,
  payload: IMedia
): Promise<IMedia | null> => {
  try {
    if (!id) throw new ApiError(httpStatus.BAD_REQUEST, "Id not found");
    const result = await Bestsellers.findByIdAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      }
    );

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




export const MediaSectionService = {
  addExploreBrand,
  getExploreBrand,
  getSingelExploreBrand,
  updateExploreBrand,
  deleteExploreBrand,

  // ==== story
  addStory,
  getStory,
  getSingelStory,
  updateStory,
  deleteStory,

  // ==== Trending Product

  addTrendingProduct,
  getTrendingProduct,
  getSingelTrendingProduct,
  updateTrendingProduct,
  deleteTrendingProduct,

  // ====Bestsellers
  addBestsellers,
  getBestsellers,
  getSingelBestsellers,
  updateBestsellers,
  deleteBestsellers,

  // ===== Product Slider
  addSlider,
  getSlider,
  getSingeSlider,
  updateSlider,
  deleteSlider,
};

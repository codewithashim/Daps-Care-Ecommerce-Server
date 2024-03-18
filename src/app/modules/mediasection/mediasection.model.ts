import { Schema, model } from "mongoose";
import {
  IMedia,
  ISlider,
  IStory,
  MediaModel,
  SliderModel,
  StoryModel
} from "./mediasection.interface";

const BrandExploreSchema = new Schema<IMedia, MediaModel>(
  {
    name: {
      type: String
    },
    vedio: {
      type: String
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

export const BrandExplore = model<IMedia, MediaModel>(
  "BrandExplore",
  BrandExploreSchema
);

const StorySchema = new Schema<IStory, StoryModel>(
  {
    name: {
      type: String
    },
    image: {
      type: String
    },
    storyData: [
      {
        type: {
          type: String  
        },
        url: String,
        duration: Number
      }
    ]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

export const Story = model<IStory, StoryModel>("Story", StorySchema);

const TrendingProductSchema = new Schema<IMedia, MediaModel>(
  {
    name: {
      type: String
    },
    vedio: {
      type: String
    },
    image: {
      type: String
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Products"
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

export const TrendingProduct = model<IMedia, MediaModel>(
  "TrendingProduct",
  TrendingProductSchema
);

const BestsellersSchema = new Schema<IMedia, MediaModel>(
  {
    name: {
      type: String
    },
    image: {
      type: String
    },
    category: {
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

export const Bestsellers = model<IMedia, MediaModel>(
  "Bestsellers",
  BestsellersSchema
);

const SliderSchema: Schema<ISlider, SliderModel> = new Schema(
  {
    mobileImage: {
      type: String
    },
    desktopImage: {
      type: String
    },
    title: {
      type: String
    },
    category: {
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

export const Slider = model<ISlider, SliderModel>("Slider", SliderSchema);

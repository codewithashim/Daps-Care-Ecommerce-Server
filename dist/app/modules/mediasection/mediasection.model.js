"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = exports.Bestsellers = exports.TrendingProduct = exports.Story = exports.BrandExplore = void 0;
const mongoose_1 = require("mongoose");
const BrandExploreSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    vedio: {
        type: String
    },
    image: {
        type: String
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.BrandExplore = (0, mongoose_1.model)("BrandExplore", BrandExploreSchema);
const StorySchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.Story = (0, mongoose_1.model)("Story", StorySchema);
const TrendingProductSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Products"
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.TrendingProduct = (0, mongoose_1.model)("TrendingProduct", TrendingProductSchema);
const BestsellersSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: String
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.Bestsellers = (0, mongoose_1.model)("Bestsellers", BestsellersSchema);
const SliderSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.Slider = (0, mongoose_1.model)("Slider", SliderSchema);

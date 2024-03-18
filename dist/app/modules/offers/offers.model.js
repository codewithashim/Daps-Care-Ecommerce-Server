"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banners = void 0;
const mongoose_1 = require("mongoose");
const BannersSchema = new mongoose_1.Schema({
    bannerOne: {
        type: String,
    },
    bannerTow: {
        type: String,
    },
    bannerThree: {
        type: String,
    },
    bannerFour: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Banners = (0, mongoose_1.model)("Banners", BannersSchema);

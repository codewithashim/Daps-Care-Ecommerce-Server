"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = exports.Product = exports.Categories = void 0;
const mongoose_1 = require("mongoose");
// ========================= Categories =========================
const CategoriesSchema = new mongoose_1.Schema({
    name: String,
    parent: String,
    details: String,
});
exports.Categories = (0, mongoose_1.model)("Categories", CategoriesSchema);
// ========================= Categories =========================
const productSchema = new mongoose_1.Schema({
    productName: String,
    discount: Number,
    price: Number,
    aPlusContent: {
        imageOne: String,
        imageTwo: String,
        imageThree: String,
        imageFour: String,
        imageFive: String,
        imageSix: String,
    },
    productDetails: [
        {
            heading: String,
            description: String,
        },
    ],
    productFeatures: [
        {
            heading: String,
            description: String,
        },
    ],
    categories: [String],
    images: [String],
    status: String,
    android: [
        {
            isAndroid: Boolean,
            screenSize: String,
            variant: [
                {
                    processorName: String,
                    processorLabel: String,
                    carsSupported: [String],
                    ram: String,
                    rom: String,
                    isAppleCarplayAndAndroidAutoSupported: Boolean,
                    wirelessWired: String,
                    isDVRSupported: Boolean,
                    is360CameraSupported: String,
                    isSimSupported: String,
                    isWarrantyAvailable: String,
                    warrantyPeriod: String,
                    basePrice: Number,
                },
            ],
        },
    ],
    fMBT: [
        {
            isFmBt: Boolean,
            controlOption: String,
            basePrice: Number,
        },
    ],
    bassTube: [
        {
            isBassTube: Boolean,
            wattage: String,
            speakerSize: String,
            basePrice: Number,
        },
    ],
    led: [
        {
            isLed: Boolean,
            variant: [
                {
                    wattage: String,
                    socketsSupported: [String],
                    basePrice: Number,
                },
            ],
        },
    ],
    speakers: [
        {
            isSpeakers: Boolean,
            speakerSize: String,
            basePrice: Number,
        },
    ],
    chargers: [
        {
            isChargers: Boolean,
            wattage: String,
            basePrice: Number,
        },
    ],
    amplifiers: [
        {
            isAmplifiers: Boolean,
            variant: [
                {
                    totalChannels: String,
                    wattage: String,
                    basePrice: Number,
                },
            ],
        },
    ],
    dampingSheets: [
        {
            isDampingSheets: Boolean,
            thickness: String,
            sheetsInOneBox: String,
            basePrice: Number,
        },
    ],
    HID: [
        {
            isHID: Boolean,
            variant: [
                {
                    wattage: String,
                    lightColor: String,
                    basePrice: Number,
                },
            ],
        },
    ],
    camera: [
        {
            isCamera: Boolean,
            variant: [
                {
                    cameraQuality: String,
                    areThereGuidelines: Boolean,
                    guidelinesType: String,
                    fieldOfViewType: String,
                    processorsSupported: [String],
                    basePrice: Number,
                },
            ],
        },
    ],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Product = (0, mongoose_1.model)("Products", productSchema);
const couponSchema = new mongoose_1.Schema({
    coupon: {
        type: String,
    },
    couponPricePercentage: {
        type: String,
    },
    couponText: {
        type: String,
    },
});
exports.Coupon = (0, mongoose_1.model)("Coupons", couponSchema);

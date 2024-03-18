import { Schema, model } from "mongoose";
import {
  IProduct,
  ProductModel,
  ICategories,
  CategoriesModel,
  ICoupon,
  CouponModal,
} from "./product.interface";

// ========================= Categories =========================

const CategoriesSchema = new Schema<ICategories, CategoriesModel>({
  name: String,
  parent: String,
  details: String,
});

export const Categories = model<ICategories, CategoriesModel>(
  "Categories",
  CategoriesSchema
);

// ========================= Categories =========================

const productSchema = new Schema<IProduct, ProductModel>(
  {
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
  }, 
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Product = model<IProduct, ProductModel>("Products", productSchema);

const couponSchema = new Schema<ICoupon, CouponModal>({
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

export const Coupon = model<ICoupon, CouponModal>("Coupons", couponSchema);

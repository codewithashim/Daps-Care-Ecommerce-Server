import { PopulatedDoc } from "mongoose";
import { Model } from "mongoose";

export type ICoupon = {
  coupon: string;
  couponPricePercentage: string;
  couponText: string;
};

export type CouponModal = Model<ICoupon, Record<string, unknown>>;
 
export type IProduct = {
  productName: string;
  discount: number;
  price:number,
  aPlusContent: {
    imageOne: string;
    imageTwo: string;
    imageThree: string;
    imageFour: string;
    imageFive: string;
    imageSix: string;

  };
  productDetails: {
    heading: string;
    description: string;
  }[];
  productFeatures: {
    heading: string;
    description: string;
  }[];
  categories: string[];
  images: string[];
  status: string;
  coupon: string[];
  android: {
    isAndroid: boolean;
    screenSize: string;
    variant: {
      processorName: string;
      processorLabel: string;
      carsSupported: string[];
      ram: string;
      rom: string;
      isAppleCarplayAndAndroidAutoSupported: boolean;
      wirelessWired: string;
      isDVRSupported: boolean;
      is360CameraSupported: string;
      isSimSupported: string;
      isWarrantyAvailable: string;
      warrantyPeriod: string;
      basePrice: number;
    }[];
  }[];
  fMBT: {
    isFmBt: boolean;
    controlOption: string;
    basePrice: number;
  }[];
  bassTube: {
    isBassTube: boolean;
    wattage: string;
    speakerSize: string;
    basePrice: number;
  }[];
  led: {
    isLed: boolean;
    variant: {
      wattage: string;
      socketsSupported: string[];
      basePrice: number;
    }[];
  }[];
  speakers: {
    isSpeakers: boolean;
    speakerSize: string;
    basePrice: number;
  }[];
  chargers: {
    isChargers: boolean;
    wattage: string;
    basePrice: number;
  }[];
  amplifiers: {
    isAmplifiers: boolean;
    variant: {
      totalChannels: string;
      wattage: string;
      basePrice: number;
    }[];
  }[];
  dampingSheets: {
    isDampingSheets: boolean;
    thickness: string;
    sheetsInOneBox: string;
    basePrice: number;
  }[];
  HID: {
    isHID: boolean;
    variant: {
      wattage: string;
      lightColor: string;
      basePrice: number;
    };
  }[];
  camera: {
    isCamera:boolean,
    variant: {
      cameraQuality: string;
      areThereGuidelines: boolean;
      guidelinesType: string;
      fieldOfViewType:  string;
      processorsSupported: string[];
      basePrice: number;
    }[];
  }[];
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;

export type ICategories = {
  _id: any;
  name?: string | null;
  parent?: string | null;
  details?: string | null;
};

export type CategoriesModel = Model<ICategories, Record<string, unknown>>;

// =========

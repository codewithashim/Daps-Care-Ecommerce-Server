import { Schema, model } from "mongoose";
import {
  ICar,
  CarModal,
  IGeneration,
  IModel,
  ICanbus,
  IFoglight,
  IBeam
} from "./car.interface";

const beamSchema = new Schema<IBeam>({
  isLowAndHighBeamsSeparate: Boolean,
  lowBeamSoketSupportedName: String,
  highBeamSoketSupportedName: String,
  beamSoketSupportedName: String
});

const foglightSchema = new Schema<IFoglight>({
  isFoglightSupported: Boolean,
  foglightSocketSupportedName: String
});

const canbusSchema = new Schema<ICanbus>({
  isCanbusRequired: { type: Boolean },
  canbusPrice: Number
});

const modelSchema = new Schema<IModel>({
  modelName: String,
  beams: beamSchema,
  foglight: foglightSchema,
  canbus: canbusSchema,
  frameCost: Number
});

const generationSchema = new Schema<IGeneration>({
  startYear: String,
  endYear: String,
  model: [modelSchema]
});

const carSchema = new Schema<ICar, CarModal>(
  {
    carName: String,
    carBrand: String,
    generation: [generationSchema]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

export const Car = model<ICar, CarModal>("Cars", carSchema);

import { Model } from "mongoose";

export type IBeam = {
  isLowAndHighBeamsSeparate: boolean;
  lowBeamSoketSupportedName: string;
  highBeamSoketSupportedName: string;
  beamSoketSupportedName: string;
};

export type IFoglight = {
  isFoglightSupported: boolean;
  foglightSocketSupportedName: string;
};

export type ICanbus = {
  isCanbusRequired: boolean;
  canbusPrice: number;
};

export type IModel = {
  modelName: string;
  beams: IBeam;
  foglight: IFoglight;
  canbus: ICanbus;
  frameCost: number;
};

export type IGeneration = {
  startYear: string;
  endYear: string;
  model: IModel[];
};

export type ICar = {
  carName: string;
  carBrand: string;
  generation: IGeneration[];
};

export type CarModal = Model<ICar, Record<string, unknown>>;

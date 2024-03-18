import { Model } from "mongoose";

export type IProcessor = {
  processorName: string;
  processorRank: number;
};

export type ProcessorModal = Model<IProcessor, Record<string, unknown>>;

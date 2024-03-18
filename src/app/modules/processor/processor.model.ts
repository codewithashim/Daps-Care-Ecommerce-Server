import { Schema, model } from "mongoose";
import { IProcessor, ProcessorModal } from "./processor.interface";

const ProcessorSchema = new Schema<IProcessor, ProcessorModal>(
  {
    processorName: {
      type: String,
    },
    processorRank: {
      type: Number,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);


export const Processor = model<IProcessor, ProcessorModal>(
  "Processors",
  ProcessorSchema
);

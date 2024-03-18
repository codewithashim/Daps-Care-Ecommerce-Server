import { Schema, model } from "mongoose";
import { AddressModel, IAddress } from "./address.interface";

const addressSchema = new Schema<IAddress, AddressModel>({
  address: { type: String },
  city: { type: String },
  country: { type: String },
  email: { type: String },
  name: { type: String },
  phone: { type: String },
  state: { type: String },
  zip: { type: String },
  level: { type: String },
});

export const Address = model<IAddress, AddressModel>("Address", addressSchema);

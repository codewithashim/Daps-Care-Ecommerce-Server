import { Model, model } from "mongoose";

export type IAddress = {
  address: string;
  city: string;
  country: string;
  email: string;
  name: string;
  level: string;
  phone: string;
  state: string;
  zip: string;
};

export type AddressModel = Model<IAddress, Record<string, unknown>>;

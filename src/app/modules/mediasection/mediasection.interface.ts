import { Model, Types } from "mongoose";

export type IMedia = {
  name?: string;
  image?: string;
  vedio?: string;
  product?: any;
  category?: any;
};

export type IStoryData = {
  type: string;
  url: string;
  duration: number;
};

export type IStory = {
  name?: string;
  image?: string;
  storyData?: IStoryData[]; // Fix: Specify storyData as an array of IStoryData
};

export type StoryModel = Model<IStory, Record<string, unknown>>;

export type MediaModel = Model<IMedia, Record<string, unknown>>;

export type ISlider = {
  mobileImage?: string;
  desktopImage?: string;
  title?: string;
  category?: string;
};

export type SliderModel = Model<ISlider, Record<string, unknown>>;

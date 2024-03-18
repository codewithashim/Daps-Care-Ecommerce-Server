import { Schema, model } from "mongoose";
import { BlogModal, IBlog } from "./blogs.interface";

const blogSchema = new Schema<IBlog>({
  title: { type: String },
  subtitle: { type: String },
  content: { type: String },
  image: { type: String },
  author: { type: String },
  tags: [{ type: String }],
  publisheDate: {
    type: Date,
    default: Date.now,
  },
});

export const Blog = model<IBlog, BlogModal>("Blogs", blogSchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
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
exports.Blog = (0, mongoose_1.model)("Blogs", blogSchema);

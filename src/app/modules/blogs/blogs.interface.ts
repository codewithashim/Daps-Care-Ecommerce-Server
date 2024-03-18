import { Model } from "mongoose";

export type IBlog = {
    title: string;
    subtitle: string;
    content: string;
    image: string;
    author: string;
    publisheDate: Date;
    tags: string[];
}


export type BlogModal = Model<IBlog, Record<string, unknown>>;

export type IBlogFilter = {
    title?: string;
    subtitle?: string;
    author?: string;
    searchTerm?: string;
}
import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { BlogService } from './blogs.service';
import { iBlogFilterableFields, iBlogSearchableFields } from './blog.contstant';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IBlog } from './blogs.interface';

const createBlog: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const BlogData = req.body;
        const result = await BlogService.createBlog(BlogData);
        sendResponse<IBlog>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Blog created successfully!',
            data: result,
        });
    }
);

type IApiResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string | null;
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
    };
    data?: T | null;
};

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, iBlogFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await BlogService.getAllBlog(filters, paginationOptions);

    sendResponse<IBlog[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blogs fetched successfully',
        meta: {
            page: result.meta?.page ?? 0,
            limit: result.meta?.limit ?? 0,
            total: result.meta?.total ?? 0,
        },
        data: result.data,
    });
});

const getSingelBlog = catchAsync(async (req: Request, res: Response) => {
    const BlogId = req.params.id;
    const result = await BlogService.getSingleBlog(BlogId);
    sendResponse<IBlog>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog fetched successfully',
        data: result,
    });
});

const updateBlog: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const BlogId = req.params.id;
        const BlogData = req.body;
        const result = await BlogService.updateBlog(BlogId, BlogData);
        sendResponse<IBlog>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Blog updated successfully!',
            data: result,
        });
    }
);

const deleteBlogs: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const BlogId = req.params.id;
        const result = await BlogService.deleteBlog(BlogId);
        sendResponse<IBlog>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Blog delete successfully!',
            data: result,
        });
    }
);

export const BlogController = {
    createBlog,
    getAllBlog,
    getSingelBlog,
    updateBlog,
    deleteBlogs,
}
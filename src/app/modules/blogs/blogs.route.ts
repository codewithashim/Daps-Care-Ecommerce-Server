import express from 'express';
import { BlogController } from './blogs.controller';


const router = express.Router();
router.post(
    '/create-blog',
    BlogController.createBlog
);
router.get('/get-singel-blog/:id', BlogController.getSingelBlog);
router.patch('/update/:id', BlogController.updateBlog);
router.delete('/delete/:id', BlogController.deleteBlogs);
router.get('/', BlogController.getAllBlog);

export const BlogRoutes = router;
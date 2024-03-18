import express from 'express';
import { PopularCategoryController } from './category.controller';

const router = express.Router();

router.post('/create', PopularCategoryController.addPopularCategory);

router.get('/get-all', PopularCategoryController.getPopularCategories);

router.delete('/delete/:id', PopularCategoryController.deletePopularCategory);

router.get('/get-single/:id', PopularCategoryController.getSinglePopularCategory);

router.patch('/update/:id', PopularCategoryController.updatePopularCategory);

export const PopularCategoryRoutes = router;

import express from 'express';
import { MediaSectionController } from './mediasection.controller';
const router = express.Router();

router.post("/create/explore-brand", MediaSectionController.addExploreBrand)
router.get("/get/explore-brand", MediaSectionController.getExploreBrand)
router.get("/get-singel/:id/explore-brand", MediaSectionController.getSingelExploreBrand)
router.patch("/update/:id/explore-brand", MediaSectionController.updateExploreBrand)
router.delete("/delete/:id/explore-brand", MediaSectionController.deleteExploreBrand)

router.post("/create/story", MediaSectionController.addStory)
router.get("/get/story", MediaSectionController.getStory)
router.get("/get-singel/:id/story", MediaSectionController.getSingelStory)
router.patch("/update/id:/story", MediaSectionController.updateStory)
router.delete("/delete/:id/story", MediaSectionController.deleteStory)

router.post("/create/trending-product", MediaSectionController.addTrendingProduct)
router.get("/get/trending-product", MediaSectionController.getTrendingProduct)
router.get("/get-singel/:id/trending-product", MediaSectionController.getSingelTrendingProduct)
router.patch("/update/:id/trending-product", MediaSectionController.updateTrendingProduct)
router.delete("/delete/:id/trending-product", MediaSectionController.deleteTrendingProduct)

router.post("/create/bestsellers", MediaSectionController.addBestsellers)
router.get("/get/bestsellers", MediaSectionController.getBestsellers)
router.get("/get-singel/:id/bestsellers", MediaSectionController.getSingelBestsellers)
router.patch("/update/:id/bestsellers", MediaSectionController.updateBestsellers)
router.delete("/delete/:id/bestsellers", MediaSectionController.deleteBestsellers)


router.post("/create/slider", MediaSectionController.addSlider)
router.get("/get/slider", MediaSectionController.getSlider)
router.get("/get-singel/:id/slider", MediaSectionController.getSingelSlider)
router.patch("/update/:id/slider", MediaSectionController.updateSlider)
router.delete("/delete/:id/slider", MediaSectionController.deleteSlider)

 
export const MediaSectionRoute = router;
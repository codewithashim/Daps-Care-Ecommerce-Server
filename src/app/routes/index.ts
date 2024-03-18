import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { WishlistRoutes } from "../modules/wishlist/wishlist.router";
import { CartRoutes } from "../modules/cart/cart.route";
import { BlogRoutes } from "../modules/blogs/blogs.route";
import { InventoryRoutes } from "../modules/inventory/inventory.route";
import { ProductRoutes } from "../modules/product/product.route";
import { PopularCategoryRoutes } from "../modules/category/category.router";
import { OrderRoutes } from "../modules/order/order.route";
import { AddressRoutes } from "../modules/address/address.route";
import { CarRoutes } from "../modules/car/car.route";
import { MediaSectionRoute } from "../modules/mediasection/mediasection.route";
import { ProcessorRoutes } from "../modules/processor/processor.route";
import { BrandRoutes } from "../modules/brand/brand.route";
import { SocketRoutes } from "../modules/socket/socket.route";
import { BannersRoutes } from "../modules/offers/offers.route";
import { PaymentRoutes } from "../modules/payment/payment.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/wishlist",
    route: WishlistRoutes,
  },
  {
    path: "/cart",
    route: CartRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
  {
    path: "/inventory",
    route: InventoryRoutes,
  },
  {
    path: "/category",
    route: PopularCategoryRoutes,
  },
  {
    path: "/order",
    route: OrderRoutes,
  },
  {
    path: "/address",
    route: AddressRoutes,
  },
  {
    path: "/car",
    route: CarRoutes,
  },
  {
    path: "/media",
    route: MediaSectionRoute,
  },
  {
    path: "/processor",
    route: ProcessorRoutes,
  },
  {
    path: "/brand",
    route: BrandRoutes,
  },
  {
    path: "/socket",
    route: SocketRoutes,
  },
  {
    path: "/banner",
    route:BannersRoutes 
  },
  {
    path: "/payment",
    route: PaymentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;

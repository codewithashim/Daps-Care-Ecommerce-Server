"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const wishlist_router_1 = require("../modules/wishlist/wishlist.router");
const cart_route_1 = require("../modules/cart/cart.route");
const blogs_route_1 = require("../modules/blogs/blogs.route");
const inventory_route_1 = require("../modules/inventory/inventory.route");
const product_route_1 = require("../modules/product/product.route");
const category_router_1 = require("../modules/category/category.router");
const order_route_1 = require("../modules/order/order.route");
const address_route_1 = require("../modules/address/address.route");
const car_route_1 = require("../modules/car/car.route");
const mediasection_route_1 = require("../modules/mediasection/mediasection.route");
const processor_route_1 = require("../modules/processor/processor.route");
const brand_route_1 = require("../modules/brand/brand.route");
const socket_route_1 = require("../modules/socket/socket.route");
const offers_route_1 = require("../modules/offers/offers.route");
const payment_route_1 = require("../modules/payment/payment.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/users",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/products",
        route: product_route_1.ProductRoutes,
    },
    {
        path: "/wishlist",
        route: wishlist_router_1.WishlistRoutes,
    },
    {
        path: "/cart",
        route: cart_route_1.CartRoutes,
    },
    {
        path: "/blogs",
        route: blogs_route_1.BlogRoutes,
    },
    {
        path: "/inventory",
        route: inventory_route_1.InventoryRoutes,
    },
    {
        path: "/category",
        route: category_router_1.PopularCategoryRoutes,
    },
    {
        path: "/order",
        route: order_route_1.OrderRoutes,
    },
    {
        path: "/address",
        route: address_route_1.AddressRoutes,
    },
    {
        path: "/car",
        route: car_route_1.CarRoutes,
    },
    {
        path: "/media",
        route: mediasection_route_1.MediaSectionRoute,
    },
    {
        path: "/processor",
        route: processor_route_1.ProcessorRoutes,
    },
    {
        path: "/brand",
        route: brand_route_1.BrandRoutes,
    },
    {
        path: "/socket",
        route: socket_route_1.SocketRoutes,
    },
    {
        path: "/banner",
        route: offers_route_1.BannersRoutes
    },
    {
        path: "/payment",
        route: payment_route_1.PaymentRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;

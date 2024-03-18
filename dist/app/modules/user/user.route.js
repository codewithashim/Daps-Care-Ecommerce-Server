"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/create-user', user_controller_1.UserController.createUser);
router.get('/email/:email', user_controller_1.UserController.getUserByEmail);
router.get('/id/:id', user_controller_1.UserController.getUserById);
router.get('/', user_controller_1.UserController.getAllUsers);
// == Get admin form the user by email and is admin true  == user.route.ts
router.get('/admin/:email', user_controller_1.UserController.getAdminByEmail);
exports.UserRoutes = router;

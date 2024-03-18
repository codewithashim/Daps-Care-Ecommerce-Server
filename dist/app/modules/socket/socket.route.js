"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketRoutes = void 0;
const express_1 = __importDefault(require("express"));
const socket_controller_1 = require("./socket.controller");
const router = express_1.default.Router();
router.post("/create", socket_controller_1.SocketController.createSocket);
router.get("/get-all", socket_controller_1.SocketController.getAllSocket);
router.get("/:id", socket_controller_1.SocketController.getSingleSocket);
router.delete("/delete/:id", socket_controller_1.SocketController.deleteSocket);
router.patch("/update/:id", socket_controller_1.SocketController.updateSocket);
exports.SocketRoutes = router;

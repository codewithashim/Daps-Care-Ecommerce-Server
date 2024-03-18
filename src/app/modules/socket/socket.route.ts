import express from "express";
import { SocketController } from "./socket.controller";

const router = express.Router();

router.post("/create", SocketController.createSocket);
router.get("/get-all", SocketController.getAllSocket);
router.get("/:id", SocketController.getSingleSocket);
router.delete("/delete/:id", SocketController.deleteSocket);
router.patch("/update/:id", SocketController.updateSocket);

export const SocketRoutes = router;

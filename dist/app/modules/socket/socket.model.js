"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
const mongoose_1 = require("mongoose");
const SocketSchema = new mongoose_1.Schema({
    socketName: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Socket = (0, mongoose_1.model)("Sockets", SocketSchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose_1.Schema({
    address: { type: String },
    city: { type: String },
    country: { type: String },
    email: { type: String },
    name: { type: String },
    phone: { type: String },
    state: { type: String },
    zip: { type: String },
    level: { type: String },
});
exports.Address = (0, mongoose_1.model)("Address", addressSchema);

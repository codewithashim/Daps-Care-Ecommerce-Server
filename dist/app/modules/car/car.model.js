"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const mongoose_1 = require("mongoose");
const beamSchema = new mongoose_1.Schema({
    isLowAndHighBeamsSeparate: Boolean,
    lowBeamSoketSupportedName: String,
    highBeamSoketSupportedName: String,
    beamSoketSupportedName: String
});
const foglightSchema = new mongoose_1.Schema({
    isFoglightSupported: Boolean,
    foglightSocketSupportedName: String
});
const canbusSchema = new mongoose_1.Schema({
    isCanbusRequired: { type: Boolean },
    canbusPrice: Number
});
const modelSchema = new mongoose_1.Schema({
    modelName: String,
    beams: beamSchema,
    foglight: foglightSchema,
    canbus: canbusSchema,
    frameCost: Number
});
const generationSchema = new mongoose_1.Schema({
    startYear: String,
    endYear: String,
    model: [modelSchema]
});
const carSchema = new mongoose_1.Schema({
    carName: String,
    carBrand: String,
    generation: [generationSchema]
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.Car = (0, mongoose_1.model)("Cars", carSchema);

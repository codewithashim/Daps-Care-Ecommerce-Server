"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Processor = void 0;
const mongoose_1 = require("mongoose");
const ProcessorSchema = new mongoose_1.Schema({
    processorName: {
        type: String,
    },
    processorRank: {
        type: Number,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Processor = (0, mongoose_1.model)("Processors", ProcessorSchema);

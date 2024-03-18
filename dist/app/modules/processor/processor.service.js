"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessorService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const processor_model_1 = require("./processor.model");
const createProcessor = (payload) => {
    try {
        if (!payload) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Not Found Processor Data");
        }
        else {
            const result = processor_model_1.Processor.create(payload);
            console.log(result);
            return result;
        }
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
};
const getAllProcessor = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = processor_model_1.Processor.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
const getSingleProcessor = (ProcessorId) => __awaiter(void 0, void 0, void 0, function* () {
    const ProcessorItems = yield processor_model_1.Processor.findOne({ _id: ProcessorId });
    return ProcessorItems;
});
const deleteProcessor = (ProcessorId) => __awaiter(void 0, void 0, void 0, function* () {
    const ProcessorItem = yield processor_model_1.Processor.findByIdAndDelete({ _id: ProcessorId });
    return ProcessorItem;
});
const updateProcessor = (_id, ProcessorData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield processor_model_1.Processor.findByIdAndUpdate({ _id: _id }, ProcessorData, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
});
exports.ProcessorService = {
    createProcessor,
    getAllProcessor,
    getSingleProcessor,
    updateProcessor,
    deleteProcessor
};

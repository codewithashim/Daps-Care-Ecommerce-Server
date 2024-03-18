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
exports.uploadCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
const config_1 = __importDefault(require("../../../config"));
cloudinary_1.v2.config({
    cloud_name: config_1.default.cloude.cloude_name,
    api_key: config_1.default.cloude.cloude_api_key,
    api_secret: config_1.default.cloude.cloude_secret
});
const uploadCloudinary = (localFilePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!localFilePath) {
            return null;
        }
        else {
            const responce = yield cloudinary_1.v2.uploader.upload(localFilePath, {
                resource_type: "auto",
            });
            console.log(responce.url);
            return responce;
        }
    }
    catch (error) {
        fs_1.default.unlinkSync(localFilePath);
        return null;
    }
});
exports.uploadCloudinary = uploadCloudinary;

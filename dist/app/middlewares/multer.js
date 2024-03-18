"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uploadDestination = "./uploads/";
if (!fs_1.default.existsSync(uploadDestination)) {
    try {
        fs_1.default.mkdirSync(uploadDestination, { recursive: true });
    }
    catch (err) {
        console.error("Error creating directory:", err);
    }
}
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDestination);
    },
    filename: function (req, file, cb) {
        const extName = path_1.default.extname(file.originalname);
        const fileName = file.originalname
            .replace(extName, "")
            .toLowerCase()
            .split(" ")
            .join("-") +
            "-" +
            Date.now();
        cb(null, fileName + extName);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
exports.default = upload;

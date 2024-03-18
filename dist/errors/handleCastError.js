"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const handleCastError = (error) => {
    const errors = [
        {
            path: error.path,
            message: 'Invalid Id',
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Cast Error',
        errorMessages: errors,
    };
};
exports.default = handleCastError;

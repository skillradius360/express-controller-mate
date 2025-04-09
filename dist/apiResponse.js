"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class apiResponse {
    constructor(statusCode, data, message) {
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
    }
}
exports.default = apiResponse;

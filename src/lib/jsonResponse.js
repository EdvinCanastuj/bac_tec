import { jsonResponse } from './jsonResponse.js';
export function jsonResponse(statusCode, body) {
    return {
        statusCode,
        body,
    };
}
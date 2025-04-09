declare class apiError extends Error {
    statusCode: number;
    success: boolean;
    error: string | Array<string>;
    constructor(statusCode: number, message?: string, error?: never[], stack?: string);
}
export { apiError };

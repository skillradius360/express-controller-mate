declare class apiResponse<returnType> {
    message: string;
    statusCode: number;
    data: returnType;
    constructor(statusCode: number, data: returnType, message: string);
}
export default apiResponse;

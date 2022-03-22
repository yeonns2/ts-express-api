import { Request, Response } from "express";

import ResponseMessage from "../../../config/baseResponseStatus";
import {response} from "../../../config/response";
import Logger from "../../../config/logger";

/**
 * API Name : 테스트 API
 * [GET] /app/test
 */
const getTest = async function (req: Request, res: Response) {
    return res.send(response(ResponseMessage.SUCCESS))
}

export{getTest}
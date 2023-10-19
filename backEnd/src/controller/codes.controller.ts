import { Request, Response } from "express";
import CodesService from "../service/codes.service";

const codesService = new CodesService();

class CodesController {
  async getCodes(_req: Request, res: Response) {
    const allCodes = await codesService.getCodes();
    res.status(200).json(allCodes);
  }
}

export default CodesController

import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../provider/token.provider";
import httpCodes from "../utils/httpCodes";

const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;  

  if (!authorization) {
    return res.status(httpCodes.UNAUTHORIZED).json({ message: "No token provided" });
  }

  const [, token] = authorization.split(" ");

  if (!token) {
    return res.status(httpCodes.UNAUTHORIZED).json({ message: "Token not found" });
  }

  console.log(token);
  

  try {
    verifyToken(token);
    next();
  } catch (err) {
    return res.status(httpCodes.UNAUTHORIZED).json({ message: "Invalid token or expired" });
  }

};

export {
  authenticateToken
};

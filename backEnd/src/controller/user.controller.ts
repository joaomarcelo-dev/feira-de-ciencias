import { Request, Response } from "express";

import UserService from "../service/user.service";

const userService = new UserService();

class UserController {
  async loginUser(req: Request, res: Response) {    
    const { name, password } = req.body;
    const { status, data } = await userService.loginUser({ name, password });
    return res.status(status).json(data);
  }

  async getAllUsers(req: Request, res: Response) {
    const { status, data } = await userService.getAllUsers();
    return res.status(status).json(data);
  }

  async deleteUser(req: Request, res: Response) {
    const { userId } = req.params;
    const { status, data } = await userService.deleteUser(userId);
    return res.status(status).json(data);
  }
}

export default UserController;
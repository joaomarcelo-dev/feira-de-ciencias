import { Router } from "express";
import UserController from "../controller/user.controller";
import { authenticateToken } from "../auth/authenticate.token";
import { validateNameInput, validatePasswordInput } from "../middleware/user.middleware";

const userRouter = Router();

const userController = new UserController();

userRouter.route('/')
  .get(
    // authenticateToken,
    userController.getAllUsers
  )

userRouter.route('/:userId')
  .delete(
    // authenticateToken,
    userController.deleteUser
  );

userRouter.route('/login')
  .post(
    // Middlewares
    validateNameInput,
    validatePasswordInput,

    // Controller
    userController.loginUser
  );

export default userRouter;

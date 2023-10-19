import { routerGetAllChats } from './../../../mobile/src/Provider/app.server';
import { Router } from "express";
import MessageController from "../controller/message.controller";
import { authenticateToken } from "../auth/authenticate.token";
import messageMiddleware from "../middleware/message.middleware";

const messageRouter = Router();

const messageController = new MessageController();

messageRouter.route('/:chatId')
  .get(
    messageMiddleware.verifyChatId,
    messageController.getMessagesByChatId,
  )
  .post(
    // authenticateToken,
    messageController.createMessage
  );

messageRouter.route('/')
  .get(
    messageController.getAllMessages,
  );

export default messageRouter;

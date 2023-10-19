import { Router } from 'express';
import ChatController from '../controller/chat.controller';
import { authenticateToken } from '../auth/authenticate.token';

const chatRouter = Router();
const chatController = new ChatController();

chatRouter.route('/')
  .get(
    // authenticateToken,
    chatController.getAllChats
  )

  .post(
    // authenticateToken,
    chatController.createChat
  );

export default chatRouter;
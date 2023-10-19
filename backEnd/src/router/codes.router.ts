import { Router } from 'express';
import CodesController from '../controller/codes.controller';

const codesController = new CodesController();

const codesRouter = Router();

codesRouter.route('/')
  .get(
    codesController.getCodes 
  )

export default codesRouter;


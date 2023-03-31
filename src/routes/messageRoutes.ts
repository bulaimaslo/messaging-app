import { Router } from 'express';
import { createMessage, getAllMessages } from '../controllers/messageController';

const messageRouter = Router();

messageRouter.post('/', createMessage);
messageRouter.get('/', getAllMessages);

export default messageRouter;
 
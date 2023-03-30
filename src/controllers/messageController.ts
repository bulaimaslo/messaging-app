import { Request, Response } from 'express';
import { Message, IMessage } from '../models/message';

export const createMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sender, recipient, text } = req.body;
    const newMessage: IMessage = new Message({ sender, recipient, text });
    const savedMessage: IMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

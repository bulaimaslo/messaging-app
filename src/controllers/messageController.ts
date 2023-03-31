import { Request, Response } from "express";
import { Message, IMessage } from "../models/message";

export const createMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { sender, receiver, body } = req.body;
    const newMessage: IMessage = new Message({ sender, receiver, body });
    const savedMessage: IMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllMessages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const messages: IMessage[] = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

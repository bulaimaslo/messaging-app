import mongoose from "mongoose";

export interface IMessage extends mongoose.Document {
  sender: string;
  receiver: string;
  body: string;
  createdAt: Date;
}

const messageSchema = new mongoose.Schema({
  sender: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    ref: "User",
    required: true,
  },
  receiver: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    ref: "User",
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Message = mongoose.model<IMessage>("Message", messageSchema);

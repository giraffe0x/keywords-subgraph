import {
  NewMessage,
  NewReply
} from "../generated/Messenger/Messenger"

import { Message, Reply } from "../generated/schema"


export function handleNewMessage(event: NewMessage): void {
  const userId = event.params.from.toHexString()
  const tokenId = event.params.tokenId.toString();
  const timestamp = event.params.timestamp.toString()

  const message = new Message(`${userId}-${tokenId}-${timestamp}`);
  message.from = userId;
  message.timestamp = timestamp;
  message.content = event.params.message;

  message.save();
}

export function handleNewReply(event: NewReply): void {
  const userId = event.params.from.toHexString()
  const messageId = event.params.messageId.toString();
  const timestamp = event.params.timestamp.toString()

  const reply = new Reply(`${userId}-${messageId}-${timestamp}`);
  reply.from = userId;
  reply.timestamp = timestamp;
  reply.content = event.params.message;
  reply.belongsTo = messageId

  reply.save();
}

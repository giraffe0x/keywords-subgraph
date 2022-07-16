import {
  NewMessage,
  NewRelayedMessage,
  NewReply,
  NewRelayedReply
} from "../generated/Messenger/Messenger"

import { Message, Reply } from "../generated/schema"


export function handleNewMessage(event: NewMessage): void {
  const userId = event.params.from.toHexString()
  const tokenId = event.params.tokenId.toString();
  const timestamp = event.params.timestamp.toString()

  const message = new Message(`${userId}-${tokenId}-${timestamp}`);
  message.from = userId;
  message.tokenId = tokenId;
  message.timestamp = timestamp;
  message.sourceChain = (10010).toString();
  message.txHash = event.transaction.hash.toHexString()
  message.content = event.params.message;

  message.save();
}

export function handleNewRelayedMessage(event: NewRelayedMessage): void {
  const userId = event.params.from.toHexString()
  const tokenId = event.params.tokenId.toString();
  const timestamp = event.params.timestamp.toString();

  const message = new Message(`${userId}-${tokenId}-${timestamp}`);
  message.from = userId;
  message.tokenId = tokenId;
  message.timestamp = timestamp;
  message.sourceChain = event.params.srcChainId.toString();
  message.txHash = event.transaction.hash.toHexString()
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
  reply.sourceChain = (10010).toString();
  reply.txHash = event.transaction.hash.toHexString()
  reply.content = event.params.message;
  reply.belongsTo = messageId

  reply.save();
}

export function handleNewRelayedReply(event: NewRelayedReply): void {
  const userId = event.params.from.toHexString()
  const messageId = event.params.messageId.toString();
  const timestamp = event.params.timestamp.toString()

  const reply = new Reply(`${userId}-${messageId}-${timestamp}`);
  reply.from = userId;
  reply.timestamp = timestamp;
  reply.sourceChain = event.params.srcChainId.toString();
  reply.txHash = event.transaction.hash.toHexString()
  reply.content = event.params.message;
  reply.belongsTo = messageId

  reply.save();
}

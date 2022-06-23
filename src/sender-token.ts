import {
  // SenderBatchTransfer,
  SenderBurn,
  // SenderInitialMint,
  SenderInitialVerifiedMint,
  SenderMint,
  SenderTransfer
} from "../generated/SenderToken/SenderToken"

import { SenderToken, User, UserTokenBalance } from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts";

export function handleSenderInitialVerifiedMint(event: SenderInitialVerifiedMint): void {
  const userId = event.params.to.toHexString()
  const tokenId = event.params.tokenId.toString();

  const userTokenBalance = new UserTokenBalance(`${userId}-${tokenId}`);
  userTokenBalance.user = userId;
  userTokenBalance.tokenId = tokenId;
  userTokenBalance.senderTokenBalance = event.params.amount;
  userTokenBalance.receiverTokenBalance = BigInt.fromI32(1);
  userTokenBalance.save();

  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.save();
  }

  let senderToken = SenderToken.load(tokenId)
  if(!senderToken) {
    senderToken = new SenderToken(tokenId);
    senderToken.tokenId = event.params.tokenId;
    senderToken.keyword = event.params.keyword;
    senderToken.isVerified = true;
    senderToken.contract = event.params.contract_addr.toHexString();
    senderToken.save();
  }
}

// for existing sender tokens
export function handleSenderMint(event: SenderMint): void {
  const userId = event.params.to.toHexString()
  const tokenId = event.params.tokenId.toString();
  let userTokenBalance = UserTokenBalance.load(`${userId}-${tokenId}`)

  // return if does not exist
  if (!userTokenBalance) {
    return
  }
  // update new balance
  userTokenBalance.senderTokenBalance = userTokenBalance.senderTokenBalance.plus(event.params.amount);

  userTokenBalance.save();
}

export function handleSenderBurn(event: SenderBurn): void {
  const userId = event.params.from.toHexString()
  const tokenId = event.params.tokenId.toString();
  const userTokenBalance = UserTokenBalance.load(`${userId}-${tokenId}`)

  if(!userTokenBalance){
    return
  }
  // update new balance
  userTokenBalance.senderTokenBalance = userTokenBalance.senderTokenBalance.minus(event.params.amount);

  userTokenBalance.save();
}

export function handleSenderTransfer(event: SenderTransfer): void {
  const userFromId = event.params.from.toHexString();
  const userToId = event.params.to.toHexString();
  const tokenId = event.params.id.toString();

  const userFromTokenBalance = UserTokenBalance.load(`${userFromId}-${tokenId}`);
  let userToTokenBalance = UserTokenBalance.load(`${userToId}-${tokenId}`);

  // return if userFrom does not exist
  if(!userFromTokenBalance){
    return
  }

  // if userTo does not exist, create new
  if(!userToTokenBalance) {
    userToTokenBalance = new UserTokenBalance(`${userToId}-${tokenId}`);

    userToTokenBalance.user = userToId;
    userToTokenBalance.tokenId = tokenId;
    userToTokenBalance.senderTokenBalance = event.params.amount;
  } else {
    // increase receiver balance
    userToTokenBalance.senderTokenBalance = userToTokenBalance.senderTokenBalance.plus(event.params.amount);
  }

  // deduct sender balance
  userFromTokenBalance.senderTokenBalance = userFromTokenBalance.senderTokenBalance.minus(event.params.amount);

  userFromTokenBalance.save();
  userToTokenBalance.save();
}

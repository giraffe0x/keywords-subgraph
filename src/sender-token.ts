import {
  SenderBatchTransfer,
  SenderBurn,
  SenderInitialMint,
  SenderInitialVerifiedMint,
  SenderMint,
  SenderTransfer
} from "../generated/SenderToken/SenderToken"

import { SenderToken, User, UserTokenBalance } from "../generated/schema"

export function handleSenderInitialVerifiedMint(event: SenderInitialVerifiedMint): void {
  const userId = event.params.to.toHexString()
  const tokenId = event.params.tokenId.toString();

  const userTokenBalance = new UserTokenBalance(`${userId}-${tokenId}`);
  userTokenBalance.user = userId;
  userTokenBalance.senderToken = tokenId;
  userTokenBalance.balance = event.params.amount;
  userTokenBalance.save();

  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.save();
  }

  let token = SenderToken.load(tokenId)
  if(!token) {
    token = new SenderToken(tokenId);
    token.tokenID = event.params.tokenId;
    token.keyword = event.params.keyword;
    token.save();
  }
}

// for existing sender tokens
export function handleSenderMint(event: SenderMint): void {
  const userId = event.params.to.toHexString()
  const tokenId = event.params.tokenId.toString();
  let userTokenBalance = UserTokenBalance.load(`${userId}-${tokenId}`)

  // create if does not exist
  if (!userTokenBalance) {
    userTokenBalance = new UserTokenBalance(`${userId}-${tokenId}`);
    userTokenBalance.user = userId;
    userTokenBalance.senderToken = tokenId;
    userTokenBalance.balance = event.params.amount;
  } else {
    // update new balance
    userTokenBalance.balance = userTokenBalance.balance.plus(event.params.amount);
  }

  userTokenBalance.save();
}

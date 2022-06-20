import {
  // ReceiverBatchTransfer,
  ReceiverBurn,
  // ReceiverBatchMint,
  ReceiverMint,
  ReceiverTransfer,
  // ReceiverInitialMint
} from "../generated/ReceiverToken/ReceiverToken"

import { User, UserTokenBalance } from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts";

// export function handleReceiverInitialMint(event: ReceiverInitialMint): void {
//   const userId = event.params.to.toHexString()
//   const tokenId = event.params.tokenId.toString();

//   let userTokenBalance = UserTokenBalance.load(`${userId}-${tokenId}`)
//   // return if does not exist
//   if (!userTokenBalance) {
//     return
//   } else {
//     userTokenBalance.receiverTokenBalance = event.params.amount;
//     userTokenBalance.save();
//   }

//   // let receiverToken = ReceiverToken.load(tokenId)
//   // if(!receiverToken) {
//   //   receiverToken = new ReceiverToken(tokenId);
//   //   receiverToken.save();
//   // }
// }

export function handleReceiverMint(event: ReceiverMint): void {
  const userId = event.params.to.toHexString()
  const tokenId = event.params.tokenId.toString();

  // return if token does not exist - should have been created with sender mint
  // let token = ReceiverToken.load(tokenId)
  // if(!token) {
  //   return
  // }

  let userTokenBalance = UserTokenBalance.load(`${userId}-${tokenId}`)
  // create user token balance entity if does not exist
  if (!userTokenBalance) {
    userTokenBalance = new UserTokenBalance(`${userId}-${tokenId}`);
    userTokenBalance.user = userId;
    userTokenBalance.tokenId = tokenId;
    userTokenBalance.senderTokenBalance = BigInt.fromI32(0);
    userTokenBalance.receiverTokenBalance = BigInt.fromI32(0);
  }

  userTokenBalance.receiverTokenBalance = userTokenBalance.receiverTokenBalance.plus(event.params.amount);
  userTokenBalance.save();

  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.save();
  }
}

// export function handleReceiverBatchMint(event: ReceiverBatchMint): void {
//   const userId = event.params.to.toHexString()
//   const tokenIds: string[] = event.params.tokenIds.map<string>((id: BigInt) => id.toString());
//   const amounts: BigInt[] = event.params.amounts;

//   tokenIds.forEach((tokenId: string, i: i32) => {
//     // return if token doesn't exist - should have been created with sender mint
//     let token = ReceiverToken.load(tokenId)
//     if(!token) {
//       return
//     }
//     // create user if doesn't exist
//     let user = User.load(userId);
//     if (!user) {
//       user = new User(userId);
//       user.save();
//     }

//     // deal with token balance
//     let userTokenBalance = UserTokenBalance.load(`${userId}-${tokenId}`)
//     // create user token balance entity if does not exist
//     if (!userTokenBalance) {
//       const userTokenBalance = new UserTokenBalance(`${userId}-${tokenId}`);
//       userTokenBalance.user = userId;
//       userTokenBalance.senderToken = tokenId;
//       userTokenBalance.receiverTokenBalance = event.params.amounts[i];
//       userTokenBalance.save();
//     } else {
//       // increase the token balance
//       userTokenBalance.receiverTokenBalance = userTokenBalance.receiverTokenBalance.plus(event.params.amounts[i]);

//       userTokenBalance.save();
//       }
//   })
// }

export function handleReceiverBurn(event: ReceiverBurn): void {
  const userId = event.params.from.toHexString()
  const tokenId = event.params.tokenId.toString();
  const userTokenBalance = UserTokenBalance.load(`${userId}-${tokenId}`)

  if(!userTokenBalance){
    return
  }

  // update new balance
  userTokenBalance.receiverTokenBalance = userTokenBalance.receiverTokenBalance.minus(event.params.amount);

  userTokenBalance.save();
}


export function handleReceiverTransfer(event: ReceiverTransfer): void {
  const userFromId = event.params.from.toHexString();
  const userToId = event.params.to.toHexString();
  const tokenId = event.params.id.toString();

  // sender
  const userFromTokenBalance = UserTokenBalance.load(`${userFromId}-${tokenId}`);
  // receiver
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
    userToTokenBalance.receiverTokenBalance = BigInt.fromI32(0);
    userToTokenBalance.receiverTokenBalance = BigInt.fromI32(0);
  }

  // increase receiver balance
  userToTokenBalance.receiverTokenBalance = userToTokenBalance.receiverTokenBalance.plus(event.params.amount);

  // deduct receiver balance
  userFromTokenBalance.receiverTokenBalance = userFromTokenBalance.receiverTokenBalance.minus(event.params.amount);

  userFromTokenBalance.save();
  userToTokenBalance.save();
}

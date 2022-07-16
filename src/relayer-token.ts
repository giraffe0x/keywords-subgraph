import {
  RelayerInitialMint,
  RelayerMint,
  RelayerBurn,
  UpdateTokenOwner,
  UpdateTokenProfilePic,
  UpdateTokenLink,
  RelayerTransfer
} from "../generated/RelayerToken/RelayerToken"

import { RelayerToken, User, UserTokenBalance } from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts";

export function handleRelayerInitialMint(event: RelayerInitialMint): void {
  const userId = event.params.to.toHexString()
  const tokenId = event.params.tokenId.toString();

  const userTokenBalance = new UserTokenBalance(`${userId}-${tokenId}`);
  userTokenBalance.user = userId;
  userTokenBalance.tokenId = tokenId;
  userTokenBalance.relayerTokenBalance = event.params.amount;
  userTokenBalance.receiverTokenBalance = BigInt.fromI32(1);
  userTokenBalance.save();

  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.save();
  }

  let relayerToken = RelayerToken.load(tokenId)
  if(!relayerToken) {
    relayerToken = new RelayerToken(tokenId);
    relayerToken.tokenId = event.params.tokenId;
    relayerToken.keyword = event.params.keyword;
    relayerToken.isVerified = true;
    relayerToken.contract = event.params._contract.toHexString();
    relayerToken.owner = event.params.to.toHexString();
    relayerToken.relayerTokenSupply = event.params.amount.toI32();
    relayerToken.receiverTokenSupply = event.params.amount.toI32();
    relayerToken.save();
  }
}

// for existing sender tokens
export function handleRelayerMint(event: RelayerMint): void {
  const userId = event.params.to.toHexString()
  const tokenId = event.params.tokenId.toString();
  let relayerToken = RelayerToken.load(tokenId)
  let userTokenBalance = UserTokenBalance.load(`${userId}-${tokenId}`)

  // return if does not exist
  if (!relayerToken || !userTokenBalance) {
    return
  }
  // update new balance
  userTokenBalance.relayerTokenBalance = userTokenBalance.relayerTokenBalance.plus(event.params.amount);
  relayerToken.relayerTokenSupply = relayerToken.relayerTokenSupply + event.params.amount.toI32();

  relayerToken.save();
  userTokenBalance.save();
}

export function handleRelayerBurn(event: RelayerBurn): void {
  const userId = event.params.from.toHexString()
  const tokenId = event.params.tokenId.toString();
  let relayerToken = RelayerToken.load(tokenId)
  let userTokenBalance = UserTokenBalance.load(`${userId}-${tokenId}`)

  if(!relayerToken || !userTokenBalance){
    return
  }
  // update new balance
  userTokenBalance.relayerTokenBalance = userTokenBalance.relayerTokenBalance.minus(event.params.amount);

  relayerToken.relayerTokenSupply = relayerToken.relayerTokenSupply - event.params.amount.toI32();

  relayerToken.save();
  userTokenBalance.save();
}

export function handleUpdateTokenOwner(event: UpdateTokenOwner): void {
  const tokenId = event.params.tokenId.toString();
  let relayerToken = RelayerToken.load(tokenId)

  if(!relayerToken){
    return
  }
  // update new owner
  relayerToken.owner = event.params.newOwner.toHexString();

  relayerToken.save();
}

export function handleUpdateTokenProfilePic(event: UpdateTokenProfilePic): void {
  const tokenId = event.params.tokenId.toString();
  let relayerToken = RelayerToken.load(tokenId)

  if(!relayerToken){
    return
  }
  // update new pp
  relayerToken.profilePic = event.params.profilePic;

  relayerToken.save();
}

export function handleUpdateTokenLink(event: UpdateTokenLink): void {
  const tokenId = event.params.tokenId.toString();
  let relayerToken = RelayerToken.load(tokenId)

  if(!relayerToken){
    return
  }
  // update new official link
  relayerToken.officialLink = event.params.officialLink;

  relayerToken.save();
}

export function handleRelayerTransfer(event: RelayerTransfer): void {
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
    userToTokenBalance.relayerTokenBalance = event.params.amount;
  } else {
    // increase receiver balance
    userToTokenBalance.relayerTokenBalance = userToTokenBalance.relayerTokenBalance.plus(event.params.amount);
  }

  // deduct relayer balance
  userFromTokenBalance.relayerTokenBalance = userFromTokenBalance.relayerTokenBalance.minus(event.params.amount);

  userFromTokenBalance.save();
  userToTokenBalance.save();
}

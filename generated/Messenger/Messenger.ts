// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewMessage extends ethereum.Event {
  get params(): NewMessage__Params {
    return new NewMessage__Params(this);
  }
}

export class NewMessage__Params {
  _event: NewMessage;

  constructor(event: NewMessage) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get message(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class NewRelayedMessage extends ethereum.Event {
  get params(): NewRelayedMessage__Params {
    return new NewRelayedMessage__Params(this);
  }
}

export class NewRelayedMessage__Params {
  _event: NewRelayedMessage;

  constructor(event: NewRelayedMessage) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get srcChainId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get message(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class NewRelayedReply extends ethereum.Event {
  get params(): NewRelayedReply__Params {
    return new NewRelayedReply__Params(this);
  }
}

export class NewRelayedReply__Params {
  _event: NewRelayedReply;

  constructor(event: NewRelayedReply) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get srcChainId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get messageId(): string {
    return this._event.parameters[2].value.toString();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get message(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class NewReply extends ethereum.Event {
  get params(): NewReply__Params {
    return new NewReply__Params(this);
  }
}

export class NewReply__Params {
  _event: NewReply;

  constructor(event: NewReply) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get messageId(): string {
    return this._event.parameters[1].value.toString();
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get message(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Messenger extends ethereum.SmartContract {
  static bind(address: Address): Messenger {
    return new Messenger("Messenger", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class ReplyMessageCall extends ethereum.Call {
  get inputs(): ReplyMessageCall__Inputs {
    return new ReplyMessageCall__Inputs(this);
  }

  get outputs(): ReplyMessageCall__Outputs {
    return new ReplyMessageCall__Outputs(this);
  }
}

export class ReplyMessageCall__Inputs {
  _call: ReplyMessageCall;

  constructor(call: ReplyMessageCall) {
    this._call = call;
  }

  get _messageId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _content(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ReplyMessageCall__Outputs {
  _call: ReplyMessageCall;

  constructor(call: ReplyMessageCall) {
    this._call = call;
  }
}

export class SendMessageCall extends ethereum.Call {
  get inputs(): SendMessageCall__Inputs {
    return new SendMessageCall__Inputs(this);
  }

  get outputs(): SendMessageCall__Outputs {
    return new SendMessageCall__Outputs(this);
  }
}

export class SendMessageCall__Inputs {
  _call: SendMessageCall;

  constructor(call: SendMessageCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _content(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SendMessageCall__Outputs {
  _call: SendMessageCall;

  constructor(call: SendMessageCall) {
    this._call = call;
  }
}

export class SendRelayedMessageCall extends ethereum.Call {
  get inputs(): SendRelayedMessageCall__Inputs {
    return new SendRelayedMessageCall__Inputs(this);
  }

  get outputs(): SendRelayedMessageCall__Outputs {
    return new SendRelayedMessageCall__Outputs(this);
  }
}

export class SendRelayedMessageCall__Inputs {
  _call: SendRelayedMessageCall;

  constructor(call: SendRelayedMessageCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _srcChainId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _content(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class SendRelayedMessageCall__Outputs {
  _call: SendRelayedMessageCall;

  constructor(call: SendRelayedMessageCall) {
    this._call = call;
  }
}

export class SendRelayedReplyCall extends ethereum.Call {
  get inputs(): SendRelayedReplyCall__Inputs {
    return new SendRelayedReplyCall__Inputs(this);
  }

  get outputs(): SendRelayedReplyCall__Outputs {
    return new SendRelayedReplyCall__Outputs(this);
  }
}

export class SendRelayedReplyCall__Inputs {
  _call: SendRelayedReplyCall;

  constructor(call: SendRelayedReplyCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _srcChainId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _messageId(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _content(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class SendRelayedReplyCall__Outputs {
  _call: SendRelayedReplyCall;

  constructor(call: SendRelayedReplyCall) {
    this._call = call;
  }
}

export class SetReceiverContractAddressCall extends ethereum.Call {
  get inputs(): SetReceiverContractAddressCall__Inputs {
    return new SetReceiverContractAddressCall__Inputs(this);
  }

  get outputs(): SetReceiverContractAddressCall__Outputs {
    return new SetReceiverContractAddressCall__Outputs(this);
  }
}

export class SetReceiverContractAddressCall__Inputs {
  _call: SetReceiverContractAddressCall;

  constructor(call: SetReceiverContractAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetReceiverContractAddressCall__Outputs {
  _call: SetReceiverContractAddressCall;

  constructor(call: SetReceiverContractAddressCall) {
    this._call = call;
  }
}

export class SetRelayerContractAddressCall extends ethereum.Call {
  get inputs(): SetRelayerContractAddressCall__Inputs {
    return new SetRelayerContractAddressCall__Inputs(this);
  }

  get outputs(): SetRelayerContractAddressCall__Outputs {
    return new SetRelayerContractAddressCall__Outputs(this);
  }
}

export class SetRelayerContractAddressCall__Inputs {
  _call: SetRelayerContractAddressCall;

  constructor(call: SetRelayerContractAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRelayerContractAddressCall__Outputs {
  _call: SetRelayerContractAddressCall;

  constructor(call: SetRelayerContractAddressCall) {
    this._call = call;
  }
}

export class SetReplyMessagePriceCall extends ethereum.Call {
  get inputs(): SetReplyMessagePriceCall__Inputs {
    return new SetReplyMessagePriceCall__Inputs(this);
  }

  get outputs(): SetReplyMessagePriceCall__Outputs {
    return new SetReplyMessagePriceCall__Outputs(this);
  }
}

export class SetReplyMessagePriceCall__Inputs {
  _call: SetReplyMessagePriceCall;

  constructor(call: SetReplyMessagePriceCall) {
    this._call = call;
  }

  get _price(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetReplyMessagePriceCall__Outputs {
  _call: SetReplyMessagePriceCall;

  constructor(call: SetReplyMessagePriceCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

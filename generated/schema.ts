// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class SenderToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SenderToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SenderToken must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SenderToken", id.toString(), this);
    }
  }

  static load(id: string): SenderToken | null {
    return changetype<SenderToken | null>(store.get("SenderToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get keyword(): string {
    let value = this.get("keyword");
    return value!.toString();
  }

  set keyword(value: string) {
    this.set("keyword", Value.fromString(value));
  }

  get isVerified(): boolean {
    let value = this.get("isVerified");
    return value!.toBoolean();
  }

  set isVerified(value: boolean) {
    this.set("isVerified", Value.fromBoolean(value));
  }

  get contract(): string | null {
    let value = this.get("contract");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contract(value: string | null) {
    if (!value) {
      this.unset("contract");
    } else {
      this.set("contract", Value.fromString(<string>value));
    }
  }

  get senderTokenSupply(): i32 {
    let value = this.get("senderTokenSupply");
    return value!.toI32();
  }

  set senderTokenSupply(value: i32) {
    this.set("senderTokenSupply", Value.fromI32(value));
  }

  get receiverTokenSupply(): i32 {
    let value = this.get("receiverTokenSupply");
    return value!.toI32();
  }

  set receiverTokenSupply(value: i32) {
    this.set("receiverTokenSupply", Value.fromI32(value));
  }

  get profilePic(): string | null {
    let value = this.get("profilePic");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set profilePic(value: string | null) {
    if (!value) {
      this.unset("profilePic");
    } else {
      this.set("profilePic", Value.fromString(<string>value));
    }
  }

  get userTokenBalances(): Array<string> | null {
    let value = this.get("userTokenBalances");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set userTokenBalances(value: Array<string> | null) {
    if (!value) {
      this.unset("userTokenBalances");
    } else {
      this.set(
        "userTokenBalances",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }

  get messages(): Array<string> | null {
    let value = this.get("messages");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set messages(value: Array<string> | null) {
    if (!value) {
      this.unset("messages");
    } else {
      this.set("messages", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get userTokenBalances(): Array<string> | null {
    let value = this.get("userTokenBalances");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set userTokenBalances(value: Array<string> | null) {
    if (!value) {
      this.unset("userTokenBalances");
    } else {
      this.set(
        "userTokenBalances",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }

  get messages(): Array<string> | null {
    let value = this.get("messages");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set messages(value: Array<string> | null) {
    if (!value) {
      this.unset("messages");
    } else {
      this.set("messages", Value.fromStringArray(<Array<string>>value));
    }
  }

  get replies(): Array<string> | null {
    let value = this.get("replies");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set replies(value: Array<string> | null) {
    if (!value) {
      this.unset("replies");
    } else {
      this.set("replies", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class UserTokenBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserTokenBalance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserTokenBalance must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserTokenBalance", id.toString(), this);
    }
  }

  static load(id: string): UserTokenBalance | null {
    return changetype<UserTokenBalance | null>(
      store.get("UserTokenBalance", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get tokenId(): string {
    let value = this.get("tokenId");
    return value!.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }

  get senderTokenBalance(): BigInt {
    let value = this.get("senderTokenBalance");
    return value!.toBigInt();
  }

  set senderTokenBalance(value: BigInt) {
    this.set("senderTokenBalance", Value.fromBigInt(value));
  }

  get receiverTokenBalance(): BigInt {
    let value = this.get("receiverTokenBalance");
    return value!.toBigInt();
  }

  set receiverTokenBalance(value: BigInt) {
    this.set("receiverTokenBalance", Value.fromBigInt(value));
  }
}

export class Message extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Message entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Message must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Message", id.toString(), this);
    }
  }

  static load(id: string): Message | null {
    return changetype<Message | null>(store.get("Message", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get tokenId(): string {
    let value = this.get("tokenId");
    return value!.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value!.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get content(): string {
    let value = this.get("content");
    return value!.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }

  get replies(): Array<string> | null {
    let value = this.get("replies");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set replies(value: Array<string> | null) {
    if (!value) {
      this.unset("replies");
    } else {
      this.set("replies", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class Reply extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Reply entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Reply must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Reply", id.toString(), this);
    }
  }

  static load(id: string): Reply | null {
    return changetype<Reply | null>(store.get("Reply", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value!.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get content(): string {
    let value = this.get("content");
    return value!.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }

  get belongsTo(): string {
    let value = this.get("belongsTo");
    return value!.toString();
  }

  set belongsTo(value: string) {
    this.set("belongsTo", Value.fromString(value));
  }
}

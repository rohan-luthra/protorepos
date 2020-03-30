// package: restaurants
// file: src/proto/tax.proto

import * as jspb from "google-protobuf";

export class Tax extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getInclusice(): boolean;
  setInclusice(value: boolean): void;

  getIsPercentage(): boolean;
  setIsPercentage(value: boolean): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tax.AsObject;
  static toObject(includeInstance: boolean, msg: Tax): Tax.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tax, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tax;
  static deserializeBinaryFromReader(message: Tax, reader: jspb.BinaryReader): Tax;
}

export namespace Tax {
  export type AsObject = {
    id: string,
    name: string,
    inclusice: boolean,
    isPercentage: boolean,
    value: number,
  }
}

export interface OrderTypeMap {
  DINEIN: 0;
  TAKEAWAY: 1;
  AGGREGATORS: 2;
  QSR: 3;
}

export const OrderType: OrderTypeMap;


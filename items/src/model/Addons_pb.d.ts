// package: items
// file: src/proto/Addons.proto

import * as jspb from "google-protobuf";

export class AddonItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getAvailable(): boolean;
  setAvailable(value: boolean): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddonItem.AsObject;
  static toObject(includeInstance: boolean, msg: AddonItem): AddonItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddonItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddonItem;
  static deserializeBinaryFromReader(message: AddonItem, reader: jspb.BinaryReader): AddonItem;
}

export namespace AddonItem {
  export type AsObject = {
    id: string,
    name: string,
    price: number,
    available: boolean,
    description: string,
  }
}

export class Addon extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getRestId(): string;
  setRestId(value: string): void;

  clearAddonItemsList(): void;
  getAddonItemsList(): Array<AddonItem>;
  setAddonItemsList(value: Array<AddonItem>): void;
  addAddonItems(value?: AddonItem, index?: number): AddonItem;

  getType(): TypeMap[keyof TypeMap];
  setType(value: TypeMap[keyof TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Addon.AsObject;
  static toObject(includeInstance: boolean, msg: Addon): Addon.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Addon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Addon;
  static deserializeBinaryFromReader(message: Addon, reader: jspb.BinaryReader): Addon;
}

export namespace Addon {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    restId: string,
    addonItemsList: Array<AddonItem.AsObject>,
    Type: TypeMap[keyof TypeMap],
  }
}

export interface TypeMap {
  CHECKBOX: 0;
  RADIO_BUTTON: 1;
  SLIDER: 2;
}

export const Type: TypeMap;


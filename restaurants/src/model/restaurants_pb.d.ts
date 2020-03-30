// package: 
// file: src/proto/restaurants.proto

import * as jspb from "google-protobuf";

export class Currency extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Currency.AsObject;
  static toObject(includeInstance: boolean, msg: Currency): Currency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Currency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Currency;
  static deserializeBinaryFromReader(message: Currency, reader: jspb.BinaryReader): Currency;
}

export namespace Currency {
  export type AsObject = {
    name: string,
    symbol: string,
  }
}

export class Payment extends jspb.Message {
  getGstin(): string;
  setGstin(value: string): void;

  getPan(): string;
  setPan(value: string): void;

  getUpi(): string;
  setUpi(value: string): void;

  getBankName(): string;
  setBankName(value: string): void;

  getAccountName(): string;
  setAccountName(value: string): void;

  getAccountNumber(): string;
  setAccountNumber(value: string): void;

  getIfsc(): string;
  setIfsc(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payment.AsObject;
  static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payment;
  static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
}

export namespace Payment {
  export type AsObject = {
    gstin: string,
    pan: string,
    upi: string,
    bankName: string,
    accountName: string,
    accountNumber: string,
    ifsc: string,
  }
}

export class Slots extends jspb.Message {
  getStartTime(): number;
  setStartTime(value: number): void;

  getEndTime(): number;
  setEndTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Slots.AsObject;
  static toObject(includeInstance: boolean, msg: Slots): Slots.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Slots, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Slots;
  static deserializeBinaryFromReader(message: Slots, reader: jspb.BinaryReader): Slots;
}

export namespace Slots {
  export type AsObject = {
    startTime: number,
    endTime: number,
  }
}

export class Timings extends jspb.Message {
  getDay(): DaysMap[keyof DaysMap];
  setDay(value: DaysMap[keyof DaysMap]): void;

  clearSlotsList(): void;
  getSlotsList(): Array<Slots>;
  setSlotsList(value: Array<Slots>): void;
  addSlots(value?: Slots, index?: number): Slots;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timings.AsObject;
  static toObject(includeInstance: boolean, msg: Timings): Timings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Timings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timings;
  static deserializeBinaryFromReader(message: Timings, reader: jspb.BinaryReader): Timings;
}

export namespace Timings {
  export type AsObject = {
    day: DaysMap[keyof DaysMap],
    slotsList: Array<Slots.AsObject>,
  }
}

export class Address extends jspb.Message {
  getLine1(): string;
  setLine1(value: string): void;

  getLine2(): string;
  setLine2(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getState(): string;
  setState(value: string): void;

  getCountry(): string;
  setCountry(value: string): void;

  getPincode(): number;
  setPincode(value: number): void;

  getGeoLatitude(): number;
  setGeoLatitude(value: number): void;

  getGeoLongitude(): number;
  setGeoLongitude(value: number): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    line1: string,
    line2: string,
    city: string,
    state: string,
    country: string,
    pincode: number,
    geoLatitude: number,
    geoLongitude: number,
    timezone: string,
  }
}

export class Restaurant extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getHashword(): string;
  setHashword(value: string): void;

  getHashwordSalt(): string;
  setHashwordSalt(value: string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): Address | undefined;
  setAddress(value?: Address): void;

  getContactNumber(): string;
  setContactNumber(value: string): void;

  getPersonOfContact(): string;
  setPersonOfContact(value: string): void;

  getLogo(): string;
  setLogo(value: string): void;

  getProfileImage(): string;
  setProfileImage(value: string): void;

  clearImagesList(): void;
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  addImages(value: string, index?: number): string;

  clearFcmTokensList(): void;
  getFcmTokensList(): Array<string>;
  setFcmTokensList(value: Array<string>): void;
  addFcmTokens(value: string, index?: number): string;

  getActive(): boolean;
  setActive(value: boolean): void;

  clearPaymentModeList(): void;
  getPaymentModeList(): Array<PaymentModesMap[keyof PaymentModesMap]>;
  setPaymentModeList(value: Array<PaymentModesMap[keyof PaymentModesMap]>): void;
  addPaymentMode(value: PaymentModesMap[keyof PaymentModesMap], index?: number): PaymentModesMap[keyof PaymentModesMap];

  clearTimingsList(): void;
  getTimingsList(): Array<Timings>;
  setTimingsList(value: Array<Timings>): void;
  addTimings(value?: Timings, index?: number): Timings;

  getSubscriptionPlan(): SubscriptionPlanMap[keyof SubscriptionPlanMap];
  setSubscriptionPlan(value: SubscriptionPlanMap[keyof SubscriptionPlanMap]): void;

  getDefaultCurrenyId(): string;
  setDefaultCurrenyId(value: string): void;

  getAssignedSalesEmpId(): string;
  setAssignedSalesEmpId(value: string): void;

  getAssignedOpsEmpId(): string;
  setAssignedOpsEmpId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Restaurant.AsObject;
  static toObject(includeInstance: boolean, msg: Restaurant): Restaurant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Restaurant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Restaurant;
  static deserializeBinaryFromReader(message: Restaurant, reader: jspb.BinaryReader): Restaurant;
}

export namespace Restaurant {
  export type AsObject = {
    id: string,
    name: string,
    username: string,
    hashword: string,
    hashwordSalt: string,
    address?: Address.AsObject,
    contactNumber: string,
    personOfContact: string,
    logo: string,
    profileImage: string,
    imagesList: Array<string>,
    fcmTokensList: Array<string>,
    active: boolean,
    paymentModeList: Array<PaymentModesMap[keyof PaymentModesMap]>,
    timingsList: Array<Timings.AsObject>,
    subscriptionPlan: SubscriptionPlanMap[keyof SubscriptionPlanMap],
    defaultCurrenyId: string,
    assignedSalesEmpId: string,
    assignedOpsEmpId: string,
  }
}

export interface SubscriptionPlanMap {
  MONTHLY: 0;
  QUATERLY: 1;
  HALF_YEARLY: 2;
  YEARLY: 3;
}

export const SubscriptionPlan: SubscriptionPlanMap;

export interface PaymentModesMap {
  CASH: 0;
  CARD: 1;
  ONLINE: 2;
  WALLET: 3;
}

export const PaymentModes: PaymentModesMap;

export interface DaysMap {
  MONDAY: 0;
  TUESDAY: 1;
  WEDNESDAY: 2;
  THURSDAY: 3;
  FRIDAY: 4;
  SATURDAY: 5;
  SUNDAY: 6;
}

export const Days: DaysMap;


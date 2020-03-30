// package: items
// file: src/proto/items.proto

import * as jspb from "google-protobuf";

export class Items extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getRatings(): number;
  setRatings(value: number): void;

  getRatingsCount(): number;
  setRatingsCount(value: number): void;

  getOrderCount(): number;
  setOrderCount(value: number): void;

  getCategoryId(): string;
  setCategoryId(value: string): void;

  getSubCategoryId(): string;
  setSubCategoryId(value: string): void;

  clearSplCategoriesList(): void;
  getSplCategoriesList(): Array<SpecialCategoryMap[keyof SpecialCategoryMap]>;
  setSplCategoriesList(value: Array<SpecialCategoryMap[keyof SpecialCategoryMap]>): void;
  addSplCategories(value: SpecialCategoryMap[keyof SpecialCategoryMap], index?: number): SpecialCategoryMap[keyof SpecialCategoryMap];

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  clearImagesList(): void;
  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  addImages(value: string, index?: number): string;

  clearTimingsList(): void;
  getTimingsList(): Array<TimingsMap[keyof TimingsMap]>;
  setTimingsList(value: Array<TimingsMap[keyof TimingsMap]>): void;
  addTimings(value: TimingsMap[keyof TimingsMap], index?: number): TimingsMap[keyof TimingsMap];

  getPriority(): number;
  setPriority(value: number): void;

  getAvailable(): boolean;
  setAvailable(value: boolean): void;

  getVeg(): boolean;
  setVeg(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Items.AsObject;
  static toObject(includeInstance: boolean, msg: Items): Items.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Items, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Items;
  static deserializeBinaryFromReader(message: Items, reader: jspb.BinaryReader): Items;
}

export namespace Items {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    price: number,
    ratings: number,
    ratingsCount: number,
    orderCount: number,
    categoryId: string,
    subCategoryId: string,
    splCategoriesList: Array<SpecialCategoryMap[keyof SpecialCategoryMap]>,
    tagsList: Array<string>,
    imagesList: Array<string>,
    timingsList: Array<TimingsMap[keyof TimingsMap]>,
    priority: number,
    available: boolean,
    veg: boolean,
  }
}

export interface TimingsMap {
  BREAKFAST: 0;
  LUNCH: 1;
  SNACKS: 2;
  DINNER: 3;
}

export const Timings: TimingsMap;

export interface SpecialCategoryMap {
  CHEFS_SPECIAL: 0;
  TODAYS_SPECIAL: 1;
}

export const SpecialCategory: SpecialCategoryMap;


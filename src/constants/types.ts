import { t } from "i18next";

export interface TranslatedString {
  ar: string;
  en: string;
}

export interface Shop {
  id: number;
  name: TranslatedString;
  description?: TranslatedString;
  image?: any;
  latitude: number;
  longitude: number;
  rating?: number;
  reviews?: number;
  distance?: string;
  offers?: TranslatedString[];
  taxNumber: string;
}

export interface Order {
  id: number;
  item: TranslatedString;
  date: string;
  status: TranslatedString;
  price: number;
  quantity: number;
  image: any;
}

export interface Favorite {
  id: number;
  name: TranslatedString;
  rating: number;
  distance: string;
  image: any;
}

export interface Earnings {
  id: number;
  date: string;
  amount: number;
}

type BaseAddress = {
  id: number;
  addressLabel: string;
  streetName: string;
  phoneNumber: string;
  latitude: number;
  longitude: number;
  isDefault: boolean;
};

type HouseAddress = BaseAddress & {
  type: "house";
  houseName?: string;
};

type ApartmentAddress = BaseAddress & {
  type: "apartment";
  buildingName: string;
  aptNumber: string;
  floorNumber: string;
};

type OfficeAddress = BaseAddress & {
  type: "office";
  companyName: string;
};

export type SavedAddress = HouseAddress | ApartmentAddress | OfficeAddress;

// export interface SavedAddress {
//   id: number;
//   addressLabel: string;
//   houseName?: string;
//   buildingName?: string;
//   floorNumber?: string;
//   aptNumber?: string;
//   companyName?: string;
//   streetName: string;
//   phoneNumber: string;
//   directionNotes?: string;
//   type: AddressType;
//   isDefault: boolean;
// }

export interface PaymentMethod {
  id: number;
  type: string;
  last4: string;
  expiry: string;
}

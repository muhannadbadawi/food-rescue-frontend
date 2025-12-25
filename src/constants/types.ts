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

export interface SavedAddress {
  id: number;
  name: TranslatedString;
  address: string;
  isDefault: boolean
}

export interface PaymentMethod {
  id: number;
  type: string;
  last4: string;
  expiry: string;
}

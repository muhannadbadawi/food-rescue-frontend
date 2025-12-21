// src/constants/mockData.ts
import {
  Shop,
  Order,
  Favorite,
  Earnings,
  SavedAddress,
  PaymentMethod,
} from "@/src/constants/types";

export const shops: Shop[] = [
  {
    id: 1,
    name: { ar: "دكان أبو محمد", en: "Abu Mohammed Shop" },
    description: {
      ar: "مفتوح 24 ساعة • توصيل سريع",
      en: "Open 24h • Fast delivery",
    },
    latitude: 32.1,
    longitude: 36.09,
    image: require("../assets/supermarket.png"),
    rating: 4.8,
    reviews: 120,
    distance: "100m",
    offers: [
      { ar: "خصم 10%", en: "10% off" },
      { ar: "اشترِ 2 واحصل على 1 مجانًا", en: "Buy 2 get 1 free" },
    ],
  },
  {
    id: 2,
    name: { ar: "دكان أبو علي", en: "Abu Ali Shop" },
    description: {
      ar: "مفتوح 12 ساعة • منتجات طازجة",
      en: "Open 12h • Fresh products",
    },
    latitude: 32.1002,
    longitude: 36.0905,
    image: require("../assets/supermarket2.png"),
    rating: 4.5,
    reviews: 98,
    distance: "150m",
    offers: [
      { ar: "خصم 15% على الخضار", en: "15% off on vegetables" },
      { ar: "توصيل مجاني فوق 20$", en: "Free delivery over $20" },
    ],
  },
  {
    id: 3,
    name: { ar: "دكان أبو حسن", en: "Abu Hassan Shop" },
    description: {
      ar: "مفتوح 5 ساعات • منتجات عضوية",
      en: "Open 5h • Organic products",
    },
    latitude: 32.0998,
    longitude: 36.0895,
    image: require("../assets/supermarket3.png"),
    rating: 4.9,
    reviews: 50,
    distance: "200m",
    offers: [
      { ar: "منتجات عضوية طازجة", en: "Fresh organic products" },
      { ar: "خصم 5% على الطلب الأول", en: "5% off first order" },
    ],
  },
  {
    id: 4,
    name: { ar: "دكان المدينة", en: "Al-Madina Shop" },
    description: {
      ar: "مفتوح 18 ساعة • منتجات محلية",
      en: "Open 18h • Local products",
    },
    latitude: 32.1001,
    longitude: 36.091,
    image: require("../assets/supermarket2.png"),
    rating: 4.6,
    reviews: 80,
    distance: "250m",
    offers: [
      { ar: "خصم على منتجات الألبان", en: "Dairy products discount" },
      { ar: "اشترِ أكثر ووفر أكثر", en: "Buy more, save more" },
    ],
  },
];

export const orders: Order[] = [
  {
    id: 1,
    item: { ar: "بيتزا مارغريتا", en: "Margherita Pizza" },
    date: "2025-12-21 18:30",
    status: { ar: "تم التوصيل", en: "Delivered" },
    price: 5.5,
    quantity: 2,
    image: require("../assets/PizzaMargherita.jpg"),
  },
  {
    id: 2,
    item: { ar: "برجر دجاج", en: "Chicken Burger" },
    date: "2025-12-20 12:00",
    status: { ar: "قيد الانتظار", en: "Pending" },
    price: 3.2,
    quantity: 1,
    image: require("../assets/ChickenBurger.jpg"),
  },
  {
    id: 3,
    item: { ar: "سلطة يونانية", en: "Greek Salad" },
    date: "2025-12-19 14:15",
    status: { ar: "ملغى", en: "Cancelled" },
    price: 2.8,
    quantity: 1,
    image: require("../assets/GreekSalad.jpg"),
  },
];

export const favorites: Favorite[] = [
  {
    id: 1,
    name: { ar: "دكان أبو محمد", en: "Abu Mohammed Shop" },
    rating: 4.8,
    distance: "100m",
    image: require("../assets/supermarket.png"),
  },
  {
    id: 2,
    name: { ar: "دكان أبو حسن", en: "Abu Hassan Shop" },
    rating: 4.9,
    distance: "200m",
    image: require("../assets/supermarket3.png"),
  },
  {
    id: 3,
    name: { ar: "دكان المدينة", en: "Al-Madina Shop" },
    rating: 4.6,
    distance: "250m",
    image: require("../assets/supermarket2.png"),
  },
];

export const earnings: Earnings[] = [
  { id: 1, date: "2025-12-21", amount: 120.5 },
  { id: 2, date: "2025-12-20", amount: 95.2 },
  { id: 3, date: "2025-12-19", amount: 150.0 },
  { id: 4, date: "2025-12-18", amount: 80.0 },
];

export const savedAddresses: SavedAddress[] = [
  {
    id: 1,
    name: { ar: "المنزل", en: "Home" },
    address: "شارع الملكة رانيا، عمان",
    isDefault: true,
  },
  {
    id: 2,
    name: { ar: "العمل", en: "Work" },
    address: "شارع المدينة، عمان",
    isDefault: false,
  },
  {
    id: 3,
    name: { ar: "الجامعة", en: "University" },
    address: "شارع الجامعة، عمان",
    isDefault: false,
  },
];

export const paymentMethods: PaymentMethod[] = [
  { id: 1, type: "Visa", last4: "1234", expiry: "12/25" },
  { id: 2, type: "MasterCard", last4: "5678", expiry: "03/26" },
  { id: 3, type: "PayPal", last4: "abcd", expiry: "N/A" },
  { id: 4, type: "CliQ", last4: "9876", expiry: "N/A" },
  { id: 5, type: "ApplePay", last4: "4321", expiry: "N/A" },
];

// Receipts
export const receipts = [
  {
    id: 1,
    date: "2025-12-21",
    amount: 120.5,
    description: { ar: "طلب بيتزا مارغريتا", en: "Margherita Pizza Order" },
  },
  {
    id: 2,
    date: "2025-12-20",
    amount: 95.2,
    description: { ar: "طلب برجر دجاج", en: "Chicken Burger Order" },
  },
  {
    id: 3,
    date: "2025-12-19",
    amount: 150.0,
    description: { ar: "طلب سلطة يونانية", en: "Greek Salad Order" },
  },
  {
    id: 4,
    date: "2025-12-18",
    amount: 80.0,
    description: { ar: "طلب مشروبات", en: "Drinks Order" },
  },
];

export const ProfileScreens = {
  ProfileMain: "ProfileMain",
  Receipts: "Receipts",
  SavedAddresses: "SavedAddresses",
  PaymentMethod: "PaymentMethod",
  Country: "Country",
  Theme: "Theme",
  Language: "Language",
} as const;

export type ProfileScreenName = (typeof ProfileScreens)[keyof typeof ProfileScreens];

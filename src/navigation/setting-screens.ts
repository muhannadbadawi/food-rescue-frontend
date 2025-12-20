export const SettingScreens = {
  SettingsMain: "SettingsMain",
  Receipts: "Receipts",
  SavedAddresses: "SavedAddresses",
  PaymentMethod: "PaymentMethod",
  Country: "Country",
  Theme: "Theme",
  Language: "Language",
} as const;

export type SettingScreenName = (typeof SettingScreens)[keyof typeof SettingScreens];

export const SettingScreens = {
  SettingsMain: "SettingsMain",
  Receipts: "Receipts",
  SavedAddresses: "SavedAddresses",
  PaymentMethod: "PaymentMethod",
  Country: "Country",
  ThemeScreen: "ThemeScreen",
  LanguageScreen: "LanguageScreen",
} as const;

export type SettingScreenName = (typeof SettingScreens)[keyof typeof SettingScreens];

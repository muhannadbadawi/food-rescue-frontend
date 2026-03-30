export const SettingScreens = {
  SettingsMain: "SettingsMain",
  Profile: "Profile",
  Receipts: "Receipts",
  SavedAddresses: "SavedAddresses",
  PaymentMethod: "PaymentMethod",
  Country: "Country",
  ThemeScreen: "ThemeScreen",
  LanguageScreen: "LanguageScreen",
  EditProfile: "EditProfile",
} as const;

export type SettingScreenName = (typeof SettingScreens)[keyof typeof SettingScreens];

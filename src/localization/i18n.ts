import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "./en.json";
import ar from "./ar.json";

const LANG_KEY = "APP_LANGUAGE";

// Default device lang (safe)
const locales = Localization.getLocales();
const deviceLang =
  locales && locales.length > 0 && locales[0]?.languageCode === "ar"
    ? "ar"
    : "en";

// Initialize i18n synchronously with default language
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: deviceLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export const initI18n = async () => {
  const savedLang = await AsyncStorage.getItem(LANG_KEY);
  if (savedLang && savedLang !== i18n.language) {
    await i18n.changeLanguage(savedLang);
  }
};

export const changeLanguage = async (lang: "en" | "ar") => {
  await AsyncStorage.setItem(LANG_KEY, lang);
  await i18n.changeLanguage(lang);
};

export default i18n;

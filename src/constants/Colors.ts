/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const DefaultColors = {
  light: {
    primary: "#4aaf5bff",
    primaryText: "#ffffff",
    secondaryText: "#8f8f8fff",
    background: "#fff",
    text: '#11181C',
    tint: tintColorLight,
    border: '#e2e2e2ff',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    primary: "#4aaf5bff",
    primaryText: "#ffffff",
    border: "#1c1c1eff",
    secondaryText: "#8f8f8fff",
    background: "#121212",
    text: '#ECEDEE',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
} as const;

/**
 * App default colors for light and dark theme
 */

const tintColorLight = "#4aaf5bff";
const tintColorDark = "#ffffff";

export const DefaultColors = {
  light: {
    primary: "#4aaf5bff",          // Buttons, highlights
    primaryText: "#ffffff",        // Text on primary background
    secondaryText: "#6e6e6eff",    // Secondary text
    background: "#ffffff",         // Screen background
    text: "#11181C",               // Main text
    tint: tintColorLight,          // Accent color
    border: "#e2e2e2ff",           // Input borders, dividers
    icon: "#687076",               // Icons
    tabIconDefault: "#687076",      // Tab inactive
    tabIconSelected: tintColorLight // Tab active
  },
  dark: {
    primary: "#4aaf5bff",
    primaryText: "#ffffff",
    secondaryText: "#9e9e9eff",
    background: "#121212",
    text: "#ECEDEE",
    tint: tintColorDark,
    border: "#1c1c1eff",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark
  },
} as const;

const tintColorLight = "#4aaf5bff";
const tintColorDark = "#ffffff";

export const DefaultColors = {
  light: {
    primary: "#4aaf5bff",
    primaryText: "#ffffff",

    background: "#ffffff",
    surface: "#f9f9f9ff",

    textPrimary: "#11181C",
    secondaryText: "#6e6e6eff",
    mutedText: "#9ca3aaff",

    border: "#e2e2e2ff",
    divider: "#f0f0f0ff",

    icon: "#687076",
    tint: tintColorLight,

    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,

    success: "#22c55eff",
    warning: "#f59e0bff",
    error: "#FF3B30",
    errorText: "#ffffff",
    selectedColor: "#1362acff",
    overlay: "rgba(0,0,0,0.4)",
  },

  dark: {
    primary: "#4aaf5bff",
    primaryText: "#ffffff",

    background: "#121212",
    surface: "#1e1e1eff",

    textPrimary: "#ECEDEE",
    secondaryText: "#9e9e9eff",
    mutedText: "#6b7280ff",

    border: "#1c1c1eff",
    divider: "#2a2a2aff",

    icon: "#9BA1A6",
    tint: tintColorDark,

    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,

    success: "#22c55eff",
    warning: "#fbbf24ff",
    error: "#ff453aff",
    errorText: "#ffffff",
    selectedColor: "#1362acff",

    overlay: "rgba(0,0,0,0.6)",
  },
} as const;

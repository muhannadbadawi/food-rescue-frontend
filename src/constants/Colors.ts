const primaryGreen = "#4AAF5B";

export const DefaultColors = {
  light: {
    /* ===== Brand ===== */
    primary: primaryGreen,
    onPrimary: "#FFFFFF",

    /* ===== Backgrounds ===== */
    background: "#FFFFFF",
    surface: "#F9FAFB",
    card: "#E5E7EB",

    /* ===== Text ===== */
    textPrimary: "#111827",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",

    /* ===== Borders & Dividers ===== */
    border: "#E5E7EB",
    divider: "#F3F4F6",

    /* ===== Icons ===== */
    icon: "#6B7280",

    /* ===== States ===== */
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    onError: "#FFFFFF",

    /* ===== Selection & Overlay ===== */
    selected: primaryGreen,
    overlay: "rgba(0,0,0,0.4)",

    /* ===== Shadows ===== */
    shadow: "rgba(0,0,0,0.1)",
    shadowSoft: "rgba(0,0,0,0.05)",
    shadowStrong: "rgba(0,0,0,0.2)",
  },

  dark: {
    /* ===== Brand ===== */
    primary: primaryGreen,
    onPrimary: "#FFFFFF",

    /* ===== Backgrounds ===== */
    background: "#121212",
    surface: "#1E1E1E",
    card: "#434344",

    /* ===== Text ===== */
    textPrimary: "#E5E7EB",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",

    /* ===== Borders & Dividers ===== */
    border: "#464646ff",
    divider: "#333333",

    /* ===== Icons ===== */
    icon: "#9CA3AF",

    /* ===== States ===== */
    success: "#22C55E",
    warning: "#FBBF24",
    error: "#F87171",
    onError: "#FFFFFF",

    /* ===== Selection & Overlay ===== */
    selected: primaryGreen,
    overlay: "rgba(0,0,0,0.6)",

    /* ===== Shadows ===== */
    shadow: "rgba(0,0,0,0.6)",
    shadowSoft: "rgba(0,0,0,0.4)",
    shadowStrong: "rgba(0,0,0,0.8)",
  },
} as const;
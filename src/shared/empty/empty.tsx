import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./empty.styles";
import { useTranslation } from "react-i18next";

interface EmptyScreenProps {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const EmptyScreen = ({ title, subtitle, icon }: EmptyScreenProps) => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {icon ?? (
        <Ionicons name="storefront-outline" size={64} style={styles.icon} />
      )}

      <Text style={styles.title}>
        {title ?? t("empty.title", "Nothing here yet")}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle ??
          t("empty.subtitle", "When you have content, it will appear here")}
      </Text>
    </View>
  );
};

export default EmptyScreen;

import { useTheme } from "@/src/theme/theme-context";
import React from "react";
import { Text } from "react-native";
import { getStyles } from "./saved-addresses.styles";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyScreen from "@/src/shared/empty/empty";
const SavedAddresses = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <EmptyScreen />
    </SafeAreaView>
  );
};
export default SavedAddresses;

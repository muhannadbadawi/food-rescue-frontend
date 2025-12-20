import EmptyScreen from "@/src/shared/empty/empty";
import { useTheme } from "@/src/theme/theme-context";
import React from "react";
import { getStyles } from "./receipts.styles";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
const Receipts = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <EmptyScreen />
    </SafeAreaView>
  );
};
export default Receipts;

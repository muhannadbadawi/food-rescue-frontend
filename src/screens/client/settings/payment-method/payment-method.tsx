import { useTheme } from "@/src/theme/theme-context";
import React from "react";
import { getStyles } from "./payment-method.styles";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyScreen from "@/src/shared/empty/empty";
const PaymentMethod = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <EmptyScreen />
    </SafeAreaView>
  );
};
export default PaymentMethod;

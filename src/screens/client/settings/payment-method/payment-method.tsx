import { useTheme } from "@/src/theme/theme-context";
import React from "react";
import { getStyles } from "./payment-method.styles";
import { useTranslation } from "react-i18next";
import EmptyScreen from "@/src/shared/empty/empty";
import Screen from "@/src/shared/screen/screen";
const PaymentMethod = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <Screen>
      <EmptyScreen />
    </Screen>
  );
};
export default PaymentMethod;

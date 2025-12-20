import EmptyScreen from "@/src/shared/empty/empty";
import { useTheme } from "@/src/theme/theme-context";
import React from "react";
import { getStyles } from "./receipts.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/shared/screen/screen";
const Receipts = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <Screen showBackButton title={t("settings.receipts")}>
      <EmptyScreen />
    </Screen>
  );
};
export default Receipts;

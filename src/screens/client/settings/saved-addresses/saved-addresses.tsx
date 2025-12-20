import { useTheme } from "@/src/theme/theme-context";
import React from "react";
import { getStyles } from "./saved-addresses.styles";
import { useTranslation } from "react-i18next";
import Screen from "@/src/shared/screen/screen";
import EmptyScreen from "@/src/shared/empty/empty";
const SavedAddresses = () => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <Screen showBackButton title={t("settings.savedAddresses")}>
      <EmptyScreen />
    </Screen>
  );
};
export default SavedAddresses;

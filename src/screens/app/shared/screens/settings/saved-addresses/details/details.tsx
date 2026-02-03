import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Screen from "@/src/screens/app/shared/components/screen/screen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ClientSettingsStackParamList } from "../../client-settings-stack";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./details.styles";
import { useTranslation } from "react-i18next";
import Chip from "../../../../components/chip/chip";
import { MaterialIcons } from "@expo/vector-icons";
import AddressType from "./address-type/address-type";

type Props = NativeStackScreenProps<ClientSettingsStackParamList, "Details">;

const Details = ({ route }: Props) => {
  const { address } = route.params;
  const colors = useTheme();
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language !== "en";
  const styles = getStyles(colors, isRTL);

  const onSave = () => {
    // 🔥 لاحقًا: API / Redux / Zustand
  };

  return (
    <Screen showBackButton title={t("savedAddresses.details")}>
      <View style={styles.container}>
        <AddressType type={address.type} />
      </View>
    </Screen>
  );
};

export default Details;
// app/shared/screens/settings/saved-addresses/details

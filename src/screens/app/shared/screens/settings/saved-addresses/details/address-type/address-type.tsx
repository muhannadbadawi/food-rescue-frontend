import React from "react";
import { View } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./address-type.styles";
import { useTranslation } from "react-i18next";
import { MaterialIcons } from "@expo/vector-icons";
import Chip from "@/src/screens/app/shared/components/chip/chip";
import { EditableAddressField } from "@/src/constants/types";

const AddressType = ({
  type,
  onChangeAddressField,
}: {
  type: string;
  onChangeAddressField: (field: EditableAddressField, value: string) => void;
}) => {
  const colors = useTheme();
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language !== "en";
  const styles = getStyles(colors, isRTL);
  const addressType = [
    {
      id: "house",
      name: t("savedAddresses.type.home"),
      icon: (
        <MaterialIcons
          name="home"
          size={16}
          color={type !== "house" ? colors.primary : colors.onPrimary}
        />
      ),
    },
    {
      id: "apartment",
      name: t("savedAddresses.type.apartment"),
      icon: (
        <MaterialIcons
          name="apartment"
          size={16}
          color={type !== "apartment" ? colors.primary : colors.onPrimary}
        />
      ),
    },
    {
      id: "office",
      name: t("savedAddresses.type.work"),
      icon: (
        <MaterialIcons
          name="work"
          size={16}
          color={type !== "office" ? colors.primary : colors.onPrimary}
        />
      ),
    },
  ];
  return (
    <View style={styles.row}>
      {addressType.map((t) => (
        <Chip
          key={t.id}
          text={t.name}
          Icon={t.icon}
          selected={type === t.id}
          onPress={() => onChangeAddressField("type", t.id)}
        />
      ))}
    </View>
  );
};

export default AddressType;

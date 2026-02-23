import React, { useMemo } from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./chip.styles";
import { useTranslation } from "react-i18next";

interface ChipProps {
  // Define any props needed for the Chip component
  text: string;
  Icon?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  selected?: boolean;
}
const Chip = ({ text, Icon, onPress, style, selected }: ChipProps) => {
  const colors = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.chipContainer,
        style,
        selected && { backgroundColor: colors.primary },
      ]}
    >
      {Icon}
      <Text style={[styles.text, { color: selected ? colors.onPrimary : undefined }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Chip;

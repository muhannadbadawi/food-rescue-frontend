import React, { ReactNode, useState } from "react";
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./button.styles";
import { useTranslation } from "react-i18next";

interface IButton {
  style?: StyleProp<ViewStyle>;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  children?: ReactNode;
  spinnerColor?: string;
  spinnerSize?: "small" | "large";
}

const Button = ({
  style,
  text,
  textStyle,
  onPress,
  children,
  spinnerColor,
  spinnerSize,
}: IButton) => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const [loading, setLoading] = useState(false);

  onPress = onPress
    ? async () => {
        setLoading(true);
        try {
          await onPress!();
        } finally {
          setLoading(false);
        }
      }
    : undefined;

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style]}
      onPress={onPress}
      disabled={loading}
    >
      {!loading ? (
        (children ?? <Text style={[styles.buttonText, textStyle]}>{text}</Text>)
      ) : (
        <ActivityIndicator
          size={spinnerSize ?? "small"}
          color={spinnerColor ?? colors.onPrimary}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

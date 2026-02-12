import React, { useState } from "react";
import {
  ColorValue,
  OpaqueColorValue,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./password.styles";
import { useTranslation } from "react-i18next";
import Button from "../button/button";
import { Ionicons } from "@expo/vector-icons";
import i18n from "@/src/localization/i18n";

interface IPasswordProps {
  placeholder?: string;
  placeholderTextColor?: ColorValue | undefined;
  passwordValue?: string | undefined;
  setPasswordValue?: ((text: string) => void) | undefined;
  passwordContainerStyle?: StyleProp<ViewStyle>;
  passwordInputStyle?: StyleProp<TextStyle>;
  eyeIconStyle?: StyleProp<ViewStyle>;
  iconColor?: string | OpaqueColorValue | undefined;
  iconSize?: number | undefined;
}

const Password = ({
  placeholder,
  placeholderTextColor,
  passwordValue,
  setPasswordValue: setConfirmPassword,
  eyeIconStyle,
  passwordContainerStyle,
  passwordInputStyle,
  iconColor,
  iconSize,
}: IPasswordProps) => {
  const colors = useTheme();
  const styles = getStyles(colors);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.passwordContainer, passwordContainerStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor ?? colors.textSecondary}
        style={[styles.passwordInput, passwordInputStyle]}
        secureTextEntry={!showPassword}
        textAlign={i18n.language === "ar" ? "right" : "left"}
        value={passwordValue}
        autoComplete="password"
        onChangeText={setConfirmPassword}
      />
      <Button
        onPress={() => setShowPassword(!showPassword)}
        style={[styles.eyeIcon, eyeIconStyle]}
        children={
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={iconSize ?? 20}
            color={iconColor ?? colors.icon}
          />
        }
      />
    </View>
  );
};

export default Password;

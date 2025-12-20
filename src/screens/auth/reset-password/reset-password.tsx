import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { getStyles } from "./reset-password.styles";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useTheme } from "@/src/theme/theme-context";
import { Ionicons } from "@expo/vector-icons";
import { AppScreens } from "@/src/navigation/app-screens";
import { AuthStackParamList } from "@/src/navigation/auth-stack";

type ResetPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "ResetPassword"
>;

const ResetPassword = () => {
  const navigation = useNavigation<ResetPasswordNavigationProp>();
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onReset = () => {
    if (!password || !confirmPassword) return;
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    console.log("Password reset:", password);
    navigation.navigate(AppScreens.Login);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.iconWrapper}>
            <Ionicons
              name="shield-checkmark"
              size={80}
              color={colors.primary}
            />
          </View>

          <Text style={styles.title}>
            {t("reset-password-screen.title", "Reset Password")}
          </Text>

          <Text style={styles.subtitle}>
            {t(
              "reset-password-screen.subtitle",
              "Enter your new password below"
            )}
          </Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder={t("reset-password-screen.password")}
              placeholderTextColor={colors.secondaryText}
              style={styles.passwordInput}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color={colors.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder={t("reset-password-screen.confirmPassword")}
              placeholderTextColor={colors.secondaryText}
              style={styles.passwordInput}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={20}
                color={colors.icon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              (!password || !confirmPassword) && styles.buttonDisabled,
            ]}
            disabled={!password || !confirmPassword}
            onPress={onReset}
          >
            <Text style={styles.buttonText}>
              {t("reset-password-screen.reset", "Reset Password")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color={colors.primary} />
            <Text style={styles.backText}>
              {t("reset-password-screen.back", "Back")}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;

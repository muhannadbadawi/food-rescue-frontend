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
import { AuthScreen } from "@/src/navigation/screens-type/auth-screens";
import { AuthStackParamList } from "@/src/navigation/stacks/auth-stack";
import i18n from "@/src/localization/i18n";
import Button from "../../app/shared/components/button/button";
import Password from "../../app/shared/components/password/password";

type ResetPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "ResetPassword"
>;

const ResetPassword = () => {
  const navigation = useNavigation<ResetPasswordNavigationProp>();
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onReset = () => {
    if (!password || !confirmPassword) return;
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    console.log("Password reset:", password);
    navigation.navigate(AuthScreen.Login);
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
            {t("auth.reset-password-screen.title")}
          </Text>

          <Text style={styles.subtitle}>
            {t("auth.reset-password-screen.subtitle")}
          </Text>
          <Password
            placeholder={t("auth.password")}
            passwordContainerStyle={styles.passwordContainer}
            passwordInputStyle={styles.passwordInput}
            passwordValue={password}
            setPasswordValue={setPassword}
          />
          <Password
            placeholder={t("auth.confirmPassword")}
            passwordContainerStyle={styles.passwordContainer}
            passwordInputStyle={styles.passwordInput}
            passwordValue={confirmPassword}
            setPasswordValue={setConfirmPassword}
          />
          <Button
            style={[
              styles.button,
              (!password || !confirmPassword) && styles.buttonDisabled,
            ]}
            disabled={!password || !confirmPassword}
            onPress={onReset}
            text={t("auth.reset-password-screen.reset")}
          />
          <Button
            style={styles.backButtonContainer}
            onPress={() => navigation.goBack()}
            children={
              <>
                <Ionicons name="arrow-back" size={20} color={colors.primary} />
                <Text style={styles.backButtonText}>
                  {t("common.back")}
                </Text>
              </>
            }
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;

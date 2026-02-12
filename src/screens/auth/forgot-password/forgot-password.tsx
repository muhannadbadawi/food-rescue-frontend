import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./forgot-password.styles";
import { useTranslation } from "react-i18next";
import { AuthScreen } from "@/src/navigation/screens-type/auth-screens";
import { AuthStackParamList } from "@/src/navigation/stacks/auth-stack";
import i18n from "@/src/localization/i18n";
import Button from "../../app/shared/components/button/button";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "ForgotPassword"
>;

const ForgotPassword = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  const navigateToOTPScreen = () => {
    navigation.navigate(AuthScreen.OTPScreen);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Ionicons name="paper-plane" size={80} color={colors.primary} />
          <Text style={styles.title}>{t("forgot-password-screen.title")}</Text>
          <Text style={styles.subtitle}>
            {t("forgot-password-screen.subtitle")}
          </Text>

          <TextInput
            placeholder={t("forgot-password-screen.enter-email")}
            placeholderTextColor={colors.textSecondary}
            style={styles.input}
            keyboardType="email-address"
            value={email}
            textAlign={i18n.language === "ar" ? "right" : "left"}
            onChangeText={setEmail}
          />
          <Button text={t("forgot-password-screen.reset-password")} onPress={navigateToOTPScreen} />

          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color={colors.primary} />
            <Text style={styles.forgotText}>
              {t("forgot-password-screen.back")}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default ForgotPassword;

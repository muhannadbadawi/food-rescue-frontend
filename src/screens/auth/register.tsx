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
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../api/user-service";
import { getStyles } from "./styles/register.styles";
import { useTheme } from "@/src/theme/theme-context";
import { useTranslation } from "react-i18next"; // Translation hook
import i18n from "@/src/localization/i18n"; // i18n instance

export default function Register() {
  const navigation = useNavigation();
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await register({
      email: email,
      phone_number: phoneNumber.trim(),
      password: password,
    });
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={[
            styles.container,
            i18n.language === "ar" && { flexDirection: "column-reverse" }, // RTL support
          ]}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>{t("registerScreen.title")}</Text>
          <Text style={styles.subtitle}>{t("registerScreen.subtitle")}</Text>

          <TextInput
            placeholder={t("registerScreen.email")}
            placeholderTextColor={colors.secondaryText}
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoComplete="email"
            textAlign={i18n.language === "ar" ? "right" : "left"}
          />

          <TextInput
            placeholder={t("registerScreen.phoneNumber")}
            placeholderTextColor={colors.secondaryText}
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            autoComplete="tel"
            dataDetectorTypes="phoneNumber"
            textAlign={i18n.language === "ar" ? "right" : "left"}
          />

          <TextInput
            placeholder={t("registerScreen.password")}
            placeholderTextColor={colors.secondaryText}
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoComplete="password"
            textAlign={i18n.language === "ar" ? "right" : "left"}
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>{t("registerScreen.signUp")}</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>{t("registerScreen.alreadyHaveAccount")}</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.loginLink}>{t("registerScreen.login")}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

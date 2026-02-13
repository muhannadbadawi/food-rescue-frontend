import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./login.styles";
import { useTranslation } from "react-i18next";
import { useAuth } from "../auth-context";
import { AuthStackParamList } from "@/src/navigation/stacks/auth-stack";
import { AuthScreen } from "@/src/navigation/screens-type/auth-screens";
import i18n, { changeLanguage } from "@/src/localization/i18n";
import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/src/screens/app/shared/components/button/button";
import Password from "../../app/shared/components/password/password";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Login"
>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const languages = i18n.language === "en" ? "ع" : "E";

  const handleChangeLanguage = () => {
    changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  const handleLogin = async () => {
    try {
      await login({ email, password });

    } catch (error: any) {
      Alert.alert(t("common.error"), error?.message || "Login failed");
    }
  };

  const handleBiometricLogin = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const storedAccessToken = await SecureStore.getItemAsync("ACCESS_TOKEN");

    if (!storedAccessToken) {
      Alert.alert(t("common.error"), "No stored credentials found");
      return;
    }

    if (!hasHardware) {
      Alert.alert(t("common.error"), "Biometrics not supported");
      return;
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      Alert.alert(t("common.error"), "No Face ID / Fingerprint enrolled");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: t("auth.login-screen.loginWithFaceId"),
      fallbackLabel: t("auth.login-screen.usePassword"),
    });

    if (result.success) {
      // login("client");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.topBar}>
              <Text
                onPress={() => {
                  handleChangeLanguage();
                }}
                style={styles.languageToggle}
              >
                {languages}
              </Text>
            </View>

            <View style={styles.container}>
              {/* <Image
            source={require("../../../assets/FoodRescueLogo.png")}
            style={styles.logo}
            resizeMode="contain"
          /> */}
              <Ionicons
                name="restaurant-outline"
                size={80}
                color={colors.primary}
              />
              <Text style={styles.title}>{t("auth.login-screen.welcome")}</Text>
              <Text style={styles.subtitle}>
                {t("auth.login-screen.loginToFoodRescue")}
              </Text>
              <View style={styles.card}>
                <TextInput
                  placeholder={t("auth.email")}
                  placeholderTextColor={colors.textSecondary}
                  style={styles.input}
                  keyboardType="email-address"
                  textAlign={i18n.language === "ar" ? "right" : "left"}
                  value={email}
                  onChangeText={setEmail}
                />

                <Password
                  placeholder={t("auth.password")}
                  setPasswordValue={setPassword}
                  passwordValue={password}
                  passwordContainerStyle={styles.passwordContainer}
                  passwordInputStyle={styles.passwordInput}
                />
                <View style={styles.linksRow}>
                  <Button
                    onPress={() =>
                      navigation.navigate(AuthScreen.ForgotPassword)
                    }
                    text={t("auth.login-screen.forgot-password")}
                    style={styles.linkButton}
                    textStyle={styles.linkButtonText}
                  />
                  <Button
                    onPress={() => navigation.navigate("Register")}
                    text={t("auth.login-screen.register")}
                    style={{ backgroundColor: "transparent" }}
                    textStyle={styles.linkButtonText}
                  />
                </View>
                <View style={styles.buttonsContainer}>
                  <Button
                    text={t("auth.login")}
                    onPress={handleLogin}
                  />

                  <Text style={styles.orText}>{t("auth.login-screen.or")}</Text>

                  <Button
                    children={
                      <>
                        <Text style={styles.buttonText}>
                          {t("auth.login-screen.loginWithFaceId")}
                        </Text>
                        <Entypo
                          name="fingerprint"
                          size={18}
                          color={colors.onPrimary}
                        />
                      </>
                    }
                    onPress={handleBiometricLogin}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

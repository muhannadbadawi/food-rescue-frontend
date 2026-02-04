import React, { useEffect, useState } from "react";
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
  Image,
  StyleSheet,
  Dimensions,
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

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "Login"
>;

export default function Login() {
  const { width, height } = Dimensions.get("window");

  const navigation = useNavigation<LoginScreenNavigationProp>();
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const languages = i18n.language === "en" ? "ع" : "E";

  const handleChangeLanguage = () => {
    // if (i18n.language !== code) {
    changeLanguage(i18n.language === "en" ? "ar" : "en");
    // }
  };
  const handleLogin = async () => {
    login("client");
    Alert.alert(
      t("login-screen.loginPressed"),
      `${t("login-screen.email")}: ${email}\n${t(
        "login-screen.password",
      )}: ${password}`,
    );
    await SecureStore.setItemAsync("userEmail", email);
    await SecureStore.setItemAsync("userPassword", password);
  };

  const handleBiometricLogin = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const userEmail = await SecureStore.getItemAsync("userEmail");
    const userPassword = await SecureStore.getItemAsync("userPassword");

    if (!userEmail || !userPassword) {
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
      promptMessage: t("login-screen.loginWithFaceId"),
      fallbackLabel: t("login-screen.usePassword"),
    });

    if (result.success) {
      login("client");
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
              <Text style={styles.title}>{t("login-screen.welcome")}</Text>
              <Text style={styles.subtitle}>
                {t("login-screen.loginToFoodRescue")}
              </Text>
              <View style={styles.card}>
                <TextInput
                  placeholder={t("login-screen.email")}
                  placeholderTextColor={colors.textSecondary}
                  style={styles.input}
                  keyboardType="email-address"
                  textAlign={i18n.language === "ar" ? "right" : "left"}
                  value={email}
                  onChangeText={setEmail}
                />

                <View style={styles.passwordContainer}>
                  <TextInput
                    placeholder={t("login-screen.password")}
                    placeholderTextColor={colors.textSecondary}
                    style={styles.passwordInput}
                    secureTextEntry={!showPassword}
                    textAlign={i18n.language === "ar" ? "right" : "left"}
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

                <View style={styles.linksRow}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(AuthScreen.ForgotPassword)
                    }
                  >
                    <Text style={styles.forgotText}>
                      {t("login-screen.forgot-password")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text style={styles.registerLink}>
                      {t("login-screen.register")}
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={styles.buttonText}>
                    {t("login-screen.login")}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.orText}>{t("login-screen.or")}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleBiometricLogin}
                >
                  <Text style={styles.buttonText}>
                    {t("login-screen.loginWithFaceId")}
                  </Text>
                  <Entypo
                    name="fingerprint"
                    size={18}
                    color={colors.onPrimary}
                  />
                </TouchableOpacity>

                {/* <View style={styles.registerContainer}>
                  <Text style={styles.registerText}>
                    {t("login-screen.have-account")}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text style={styles.registerLink}>
                      {t("login-screen.register")}
                    </Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

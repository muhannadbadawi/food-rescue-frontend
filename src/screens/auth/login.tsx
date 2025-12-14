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
  Image,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/src/theme/theme-context";
import { getStyles } from "./styles/login.styles";
import { useTranslation } from "react-i18next";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate("Layout");
    Alert.alert(
      t("login-screen.loginPressed"),
      `${t("login-screen.email")}: ${email}\n${t(
        "login-screen.password"
      )}: ${password}`
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
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

          <TextInput
            placeholder={t("login-screen.email")}
            placeholderTextColor={colors.secondaryText}
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder={t("login-screen.password")}
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

          <View style={{ width: "100%" }}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>
                {t("login-screen.forgot-password")}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>{t("login-screen.login")}</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              {t("login-screen.have-account")}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.registerLink}>
                {t("login-screen.register")}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

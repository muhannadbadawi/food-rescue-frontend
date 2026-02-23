import React, { useMemo, useState } from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../../api/auth-service";
import { getStyles } from "./register.styles";
import { useTheme } from "@/src/theme/theme-context";
import { useTranslation } from "react-i18next";
import i18n from "@/src/localization/i18n";
import { Ionicons } from "@expo/vector-icons";
import ShopOwnerFields from "./fields/shop-owner-fields/shop-owner-fields";
import Password from "../../app/shared/components/password/password";
import Button from "../../app/shared/components/button/button";

export default function Register() {
  const navigation = useNavigation();
  const colors = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const { t } = useTranslation();

  /* ---------- form state ---------- */
  const [userType, setUserType] = useState<"customer" | "shopOwner">(
    "customer",
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* ---------- handlers ---------- */
  const handleRegister = async () => {
    if (userType === "customer") {
      await register({ email, phone_number: phoneNumber.trim(), password });
    } else {
      // await registerShopOwner({
      //   email,
      //   phone_number: phoneNumber.trim(),
      //   password,
      //   shop_name: shopName,
      //   shop_address: shopAddress,
      //   tax_number: taxNumber,
      //   latitude: shopCoords?.latitude,
      //   longitude: shopCoords?.longitude,
      // });
    }
    navigation.goBack();
  };

  /* ---------- render helpers ---------- */
  const renderUserTypeSelector = () => (
    <View style={styles.userTypeContainer}>
      <Text style={styles.sectionTitle}>
        {t("auth.register-screen.userType")}
      </Text>
      <View style={styles.userTypeButtons}>
        <Button
          style={[
            styles.userTypeButton,
            userType === "customer" && styles.userTypeButtonActive,
          ]}
          onPress={() => setUserType("customer")}
          children={
            <>
              <Ionicons
                name="person"
                size={24}
                color={
                  userType === "customer"
                    ? colors.onPrimary
                    : colors.textSecondary
                }
              />
              <Text
                style={[
                  styles.userTypeButtonText,
                  userType === "customer" && styles.userTypeButtonTextActive,
                ]}
              >
                {t("auth.register-screen.customer")}
              </Text>
            </>
          }
        />
        <Button
          style={[
            styles.userTypeButton,
            userType === "shopOwner" && styles.userTypeButtonActive,
          ]}
          onPress={() => setUserType("shopOwner")}
          children={
            <>
              <Ionicons
                name="storefront"
                size={24}
                color={
                  userType === "shopOwner"
                    ? colors.onPrimary
                    : colors.textSecondary
                }
              />
              <Text
                style={[
                  styles.userTypeButtonText,
                  userType === "shopOwner" && styles.userTypeButtonTextActive,
                ]}
              >
                {t("auth.register-screen.shopOwner")}
              </Text>
            </>
          }
        />
      </View>
    </View>
  );

  const renderCommonFields = () => (
    <>
      <TextInput
        placeholder={t("auth.email")}
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
        keyboardType="email-address"
        autoComplete="email"
        textAlign={i18n.language === "ar" ? "right" : "left"}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder={t("auth.phoneNumber")}
        placeholderTextColor={colors.textSecondary}
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        autoComplete="tel"
        textAlign={i18n.language === "ar" ? "right" : "left"}
      />
      <Password
        placeholder={t("auth.password")}
        passwordValue={password}
        setPasswordValue={setPassword}
      />
    </>
  );

  const renderShopOwnerFields = () => {
    if (userType !== "shopOwner") return null;

    return <ShopOwnerFields />;
  };

  /* ---------- main render ---------- */
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
          >
            <Ionicons
              name={userType === "customer" ? "person" : "storefront"}
              size={70}
              color="#fff"
              style={{
                backgroundColor: colors.primary,
                padding: 15,
                borderRadius: 35,
                margin: 30,
              }}
            />
            <Text style={styles.title}>{t("auth.register-screen.title")}</Text>
            <Text style={styles.subtitle}>
              {t("auth.register-screen.subtitle")}
            </Text>

            {renderUserTypeSelector()}
            {renderCommonFields()}
            {renderShopOwnerFields()}

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>
                {userType === "customer"
                  ? t("auth.register-screen.signUp")
                  : t("auth.register-screen.registerShop")}
              </Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>
                {t("auth.register-screen.alreadyHaveAccount")}
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.loginLink}>{t("auth.login")}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

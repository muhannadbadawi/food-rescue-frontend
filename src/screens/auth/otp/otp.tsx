import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { getStyles } from "./otp.styles";
import { useTheme } from "@/src/theme/theme-context";
import { Ionicons } from "@expo/vector-icons";
import { AuthScreen } from "@/src/navigation/screens-type/auth-screens";
import { AuthStackParamList } from "@/src/navigation/stacks/auth-stack";

type OTPScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "OTPScreen"
>;

const OtpScreen = () => {
  const navigation = useNavigation<OTPScreenNavigationProp>();
  const colors = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  const [otp, setOtp] = useState("");

  const onVerify = () => {
    if (otp.length !== 6) return;
    navigation.navigate(AuthScreen.ResetPassword);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Ionicons
            name="mail-unread-outline"
            size={80}
            color={colors.primary}
          />

          <Text style={styles.title}>{t("otp.title")}</Text>

          <Text style={styles.subtitle}>{t("otp.subtitle")}</Text>

          <OtpInput
            numberOfDigits={6}
            focusColor={colors.primary}
            onTextChange={setOtp}
            onFilled={setOtp}
            theme={{
              containerStyle: styles.otpContainer,
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
              focusedPinCodeContainerStyle: {
                borderColor: colors.primary,
              },
            }}
          />

          <TouchableOpacity
            style={[styles.button, otp.length !== 6 && styles.buttonDisabled]}
            disabled={otp.length !== 6}
            onPress={onVerify}
          >
            <Text style={styles.buttonText}>{t("otp.verify")}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={20} color={colors.primary} />
            <Text style={styles.forgotText}>{t("otp.back")}</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;

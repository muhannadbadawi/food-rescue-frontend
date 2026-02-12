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
import Button from "../../app/shared/components/button/button";

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

          <Text style={styles.title}>{t("auth.otp.title")}</Text>

          <Text style={styles.subtitle}>{t("auth.otp.subtitle")}</Text>
          <View style={styles.card}>
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
            <Button
              text={t("auth.otp.verify")}
              style={[styles.button, otp.length !== 6 && styles.buttonDisabled]}
              onPress={onVerify}
            />
            <Button
              children={
                <>
                  <Ionicons
                    name="arrow-back"
                    size={20}
                    color={colors.primary}
                  />
                  <Text style={styles.backButtonText}>{t("common.back")}</Text>
                </>
              }
              style={styles.backButtonContainer}
              onPress={() => navigation.goBack()}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;

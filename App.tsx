import React, { useEffect, useState } from "react";
import { Platform, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/auth/login/login";
import Register from "./src/screens/auth/register/register";
import Layout from "./src/screens/client/layout/layout";
import { useTheme, ThemeProvider } from "./src/theme/theme-context";

import { initI18n } from "./src/localization/i18n";
import ForgotPassword from "./src/screens/auth/forgot-password/forgot-password";
import OtpScreen from "./src/screens/auth/otp/otp";
import ResetPassword from "./src/screens/auth/reset-password/reset-password";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Layout: undefined;
  OTPScreen: undefined;
  ResetPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackScreens() {
  const colors = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Layout"
        component={Layout}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initI18n().then(() => setReady(true));
  }, []);

  if (!ready) return <View />;

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const colors = useTheme();

  return (
    <>
      <StatusBar
        barStyle={
          colors.background === "#ffffff" ? "dark-content" : "light-content"
        }
        backgroundColor={colors.background}
        translucent={Platform.OS === "android"}
      />
      <NavigationContainer>
        <StackScreens />
      </NavigationContainer>
    </>
  );
}

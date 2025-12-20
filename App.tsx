import React, { useEffect, useState } from "react";
import { Platform, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider, useTheme } from "@/src/theme/theme-context";
import { initI18n } from "@/src/localization/i18n";

import AuthStack from "@/src/navigation/auth-stack";
import AppStack from "@/src/navigation/app-stack";
import { AuthProvider, useAuth } from "./src/screens/auth/auth-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initI18n().then(() => setReady(true));
  }, []);

  if (!ready) return <View />;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

function AppContent() {
  const colors = useTheme();
  const { isLoggedIn } = useAuth();

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
        {isLoggedIn ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
}

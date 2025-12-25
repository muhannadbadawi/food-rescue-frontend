import React, { useEffect, useState } from "react";
import { ActivityIndicator, Platform, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  ThemeProvider,
  useTheme,
  useThemeController,
} from "@/src/theme/theme-context";
import { initI18n } from "@/src/localization/i18n";
import { AuthProvider, useAuth } from "./src/screens/auth/auth-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootStack from "./src/navigation/root-navigator";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initI18n().then(() => setReady(true));
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
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
  const { theme } = useThemeController();

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        translucent={Platform.OS === "android"}
      />
      <RootStack />
    </NavigationContainer>
  );
}
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Platform, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  ThemeProvider,
  useTheme,
  useThemeController,
} from "@/src/theme/theme-context";
import { initI18n } from "@/src/localization/i18n";
import { AuthProvider } from "./src/screens/auth/auth-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootNavigator from "./src/navigation/root-navigator";
import * as ExpoSplashScreen from "expo-splash-screen";
import { getStyles } from "./App.Styles";

export default function App() {
  const [ready, setReady] = useState(false);
  const colors = useTheme();
  const styles = getStyles(colors);

  useEffect(() => {
    async function prepare() {
      try {
        await ExpoSplashScreen.preventAutoHideAsync();

        // تحميل كل العمليات async مع بعض
        await Promise.all([
          initI18n(),
          // loadAuth(), loadFonts(), loadAssets() ...
        ]);
      } catch (e) {
        console.warn(e);
      } finally {
        setReady(true);
        await ExpoSplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!ready) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.gestureRoot}>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const AppContent = React.memo(() => {
  const colors = useTheme();
  const { theme } = useThemeController();

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        translucent={Platform.OS === "android"}
      />
      <RootNavigator />
    </NavigationContainer>
  );
});

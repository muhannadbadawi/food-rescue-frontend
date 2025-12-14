import React, { useEffect, useState } from "react";
import { Platform, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/auth/login";
import Register from "./src/screens/auth/register";
import Layout from "./src/screens/client/layout/layout";
import { useTheme, ThemeProvider } from "./src/theme/theme-context";

import { initI18n } from "./src/localization/i18n"; 

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Layout: undefined;
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
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
        }}
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
          colors.background === "#fff" ? "dark-content" : "light-content"
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

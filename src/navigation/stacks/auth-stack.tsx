import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "@/src/screens/auth/login/login";
import Register from "@/src/screens/auth/register/register";
import ForgotPassword from "@/src/screens/auth/forgot-password/forgot-password";
import OtpScreen from "@/src/screens/auth/otp/otp";
import ResetPassword from "@/src/screens/auth/reset-password/reset-password";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  OTPScreen: undefined;
  ResetPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTPScreen" component={OtpScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}

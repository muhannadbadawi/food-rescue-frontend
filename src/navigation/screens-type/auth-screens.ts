export const AuthScreen = {
  Login: "Login",
  Register: "Register",
  ForgotPassword: "ForgotPassword",
  OTPScreen: "OTPScreen",
  ResetPassword: "ResetPassword",
  App: "App",
} as const;

export type AppScreenName =
  typeof AuthScreen[keyof typeof AuthScreen];

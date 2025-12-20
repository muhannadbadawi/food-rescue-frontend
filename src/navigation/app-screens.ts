export const AppScreens = {
  Login: "Login",
  Register: "Register",
  ForgotPassword: "ForgotPassword",
  OTPScreen: "OTPScreen",
  ResetPassword: "ResetPassword",
  App: "App",
} as const;

export type AppScreenName =
  typeof AppScreens[keyof typeof AppScreens];

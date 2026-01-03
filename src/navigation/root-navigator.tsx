import React from "react";
import { useAuth } from "@/src/screens/auth/auth-context";
import AuthStack from "./stacks/auth-stack";
import ClientStack from "./stacks/client-stack";
import MerchantStack from "./stacks/merchant-stack";

export default function RootNavigator() {
  const { isLoggedIn, userRole } = useAuth();

  if (!isLoggedIn) {
    return <AuthStack />;
  }

  return userRole === "merchant" ? <MerchantStack /> : <ClientStack />;
}

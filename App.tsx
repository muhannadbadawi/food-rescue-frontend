import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/auth/login';
import Register from './src/screens/auth/register';
import Layout from './src/screens/client/layout/layout';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Layout: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Layout" component={Layout} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

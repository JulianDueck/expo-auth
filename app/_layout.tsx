import { Colors } from "@/constants/Colors";
import AuthContextProvider, { AuthContext } from "@/store/auth-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";

function AuthStack() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Login" }} />
      <Stack.Screen name="signup" options={{ headerTitle: "Sign Up" }} />
    </Stack>
  );
}

function AuthenticatedStack() {
  return (
    <Stack>
      <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
    </Stack>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return authCtx.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />;
}

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}

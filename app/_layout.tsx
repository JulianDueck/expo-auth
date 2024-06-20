import { Colors } from "@/constants/Colors";
import AuthContextProvider, { AuthContext } from "@/store/auth-context";
import { Link, Stack } from "expo-router";
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
      initialRouteName="login"
    >
      <Stack.Screen name="login" options={{ headerTitle: "Login" }} />
      <Stack.Screen name="signup" options={{ headerTitle: "Sign Up" }} />
    </Stack>
  );
}

function AuthenticatedStack() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
      initialRouteName="welcome"
    >
      <Stack.Screen name="welcome" options={{ headerTitle: "Welcome" }} />
    </Stack>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isAuthenticated);
  return (
    <>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </>
  );
}

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <StatusBar style="light" />
      <Navigation />
    </AuthContextProvider>
  );
}

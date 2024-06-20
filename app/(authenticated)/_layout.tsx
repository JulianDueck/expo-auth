import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function AuthenticatedStack() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Welcome" }} />
    </Stack>
  );
}

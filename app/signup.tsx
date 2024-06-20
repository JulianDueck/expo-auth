import AuthContent from "@/components/Auth/AuthContent";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { AuthContext } from "@/store/auth-context";
import { createUser } from "@/utils/auth";
import { useContext, useState } from "react";
import { Alert } from "react-native";

export default function SignupScreen() {
  const [loading, setLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const signupHandler = async (credentials: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    const response = await createUser(credentials.email, credentials.password);
    if (response.error) {
      Alert.alert(
        "Creating user failed",
        "Could not create user. Please check your input and try again later."
      );
      setLoading(false);
      return;
    }
    authCtx.authenticate(response.idToken);
    setLoading(false);
  };

  if (loading) return <LoadingOverlay message="Creating user..." />;

  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

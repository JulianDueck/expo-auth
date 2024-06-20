import AuthContent from "@/components/Auth/AuthContent";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import { AuthContext } from "@/store/auth-context";
import { loginUser } from "@/utils/auth";
import { useContext, useState } from "react";
import { Alert } from "react-native";

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const loginHandler = async (credentials: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    const response = await loginUser(credentials.email, credentials.password);
    if (response.error) {
      Alert.alert(
        "Authentication Failed",
        "Could not log you in. Please check your credentials."
      );
      setLoading(false);
      return;
    }
    authCtx.authenticate(response.idToken);
  };

  if (loading) return <LoadingOverlay message="Logging in..." />;

  return <AuthContent isLogin={true} onAuthenticate={loginHandler} />;
}

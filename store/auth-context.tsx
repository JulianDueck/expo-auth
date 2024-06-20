import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "" as string | null,
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
});

export default function AuthContextProvider(props: React.PropsWithChildren) {
  const [token, setToken] = useState<string | null>("");

  const authenticate = (token: string) => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  const value = {
    token: token,
    isAuthenticated: !!token,
    authenticate: authenticate,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

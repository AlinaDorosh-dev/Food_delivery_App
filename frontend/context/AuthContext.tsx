"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext<AuthContext>({
  token: "",
  setToken: () => {},
});

export default function AuthContextProvider({ children }: ChildrenProps) {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const auth = sessionStorage.getItem("auth");
    if (auth) {
      setToken(auth);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("auth", token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

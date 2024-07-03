import { useState } from "react";
import { AuthContext } from "../context/context";

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});

  const value = { auth, setAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

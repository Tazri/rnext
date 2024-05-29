import { useContext } from "react";
import { AuthContext } from "../context";

export function useAuth() {
  const { auth } = useContext(AuthContext);

  console.log(`auth : `);
  console.log(auth);
  return useContext(AuthContext);
}

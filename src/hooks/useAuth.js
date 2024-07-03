import { useContext } from "react";
import { AuthContext } from "./../context/context";

export default function useAuth() {
  const { auth } = useContext(AuthContext);
  console.log("> useAuth : auth -> ");
  console.log(auth);
  return useContext(AuthContext);
}

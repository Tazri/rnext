import { useContext } from "react";
import { ProfileContext } from "../context/context";

function useProfile() {
  return useContext(ProfileContext);
}

export default useProfile;

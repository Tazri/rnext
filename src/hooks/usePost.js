import { useContext } from "react";
import { PostContext } from "../context/context";

export default function usePost() {
  return useContext(PostContext);
}

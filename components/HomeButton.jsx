"use client";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Time to go home");
    router.push("/");
  };
  return (
    <button
      className="bg-sky-700 px-5 py-3 border cursor-pointer my-3"
      onClick={handleClick}
    >
      Go Home
    </button>
  );
}

import { redirect } from "next/navigation";

export default function Redirect() {
  redirect("https://www.google.com");
  return <div>redirect</div>;
}

"use client";
import LoadData from "@/components/LoadData";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  params.set("limit", 4);
  params.set("order", "desc");
  window.history.pushState(null, "", `?${params.toString()}`);
  return (
    <div className="border text-center p-4 my-4">
      <h1 className="text-center text-3xl">Contact Page</h1>
      <LoadData />
    </div>
  );
}

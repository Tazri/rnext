import LoadData from "@/components/LoadData";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <div className="border text-center p-4 my-4">
      <h1 className="text-center text-3xl">Contact Page</h1>
      <Suspense fallback={<h1>Loading....</h1>}>
        <LoadData />
      </Suspense>
    </div>
  );
}

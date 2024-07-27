import HomeButton from "@/components/HomeButton";

export const metadata = {
  title: "Journey",
};

export default function JourneyPage() {
  return (
    <>
      <div className="container mx-auto border shadow-lg p-5 my-11 text-center">
        <h1 className="text-3xl my-4 text-center">About Journey</h1>
        <HomeButton />
      </div>
    </>
  );
}

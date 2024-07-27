import Link from "next/link";

export default function AboutTemplate({ children }) {
  console.log("about template");
  return (
    <>
      <h2 className="text-3xl text-center my-5">About Template</h2>
      <ul className="flex flex-row gap-4 text-2xl container mx-auto text-sky-600">
        <li>
          <Link href="/about/company">Company</Link>
        </li>
        <li>
          <Link href="/about/board">Board</Link>
        </li>
        <li>
          <Link href="/about/journey">Journey</Link>
        </li>
      </ul>
      {children}
    </>
  );
}

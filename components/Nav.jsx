import Link from "next/link";

const links = {
  home: "/",
  about: "/about",
  contact: "/contact",
};

export default function Nav() {
  return (
    <nav className="border-b border-gray-800 mb-3">
      <ul className="flex gap-3 text-2xl p-3">
        {Object.entries(links).map(([name, link]) => {
          return (
            <li key={crypto.randomUUID()}>
              <Link href={link}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

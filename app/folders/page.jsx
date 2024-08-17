import Link from "next/link";

const links = [
  {
    text: "Folder One >",
    href: "/folders/folder-one",
  },
  {
    text: "Sub Folder One >",
    href: "/folders/folder-one/subfolder-one",
  },
];

function FoldersPage() {
  return (
    <div className="text-center flex flex-col mx-auto w-1/2 mt-7">
      <h2 className="text-3xl ">Links</h2>
      <ul className="text-xl flex flex-col gap-8 mt-7 border-t pt-4">
        {links?.map(({ text, href }) => (
          <UlLink key={href} href={href}>
            {text}
          </UlLink>
        ))}
      </ul>
    </div>
  );
}

function UlLink({ href, children }) {
  return (
    <li className="text-left">
      <Link href={href} className="bg-sky-800 px-2 py-3 rounded">
        {children}
      </Link>
    </li>
  );
}

export default FoldersPage;

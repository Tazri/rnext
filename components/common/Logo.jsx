import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div class="hidden lg:flex">
      <Link ariaLabel="Home" href="/">
        <Image
          src="/logo.svg"
          width={100}
          height={24}
          alt="Protocol"
          class="h-6 w-auto"
        />
      </Link>
    </div>
  );
}

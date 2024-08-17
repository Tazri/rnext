import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/assets/svg/menu.svg";
import Logo from "@/assets/shopping.webp";
import Avatar from "@/assets/svg/avatar.svg";
import ShoppingCart from "@/assets/svg/shopping-Cart.svg";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto ">
      <div>
        <Link href="/">
          <Image
            width="80"
            height="500"
            src={Logo}
            className="h-10 w-auto"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12 ">
        <Image
          width="1000"
          height="1000"
          src={Avatar}
          className="hidden lg:block w-[18px] h-[18px]"
          alt="login acount avatar"
        />
        <Image
          width="1000"
          height="1000"
          src={ShoppingCart}
          className="block w-5 h-5"
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
}

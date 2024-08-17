import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/assets/svg/menu.svg";
import LWSLogo from "@/assets/lws-logo-black.svg";
import Avatar from "@/assets/svg/avatar.svg";
import ShoppingCart from "@/assets/svg/shopping-Cart.svg";
import Header from "@/components/homepage/Header";
import CardContainer from "@/components/homepage/CardContainer";

export default function HomePage() {
  return (
    <>
      <Header />
      <CardContainer />
    </>
  );
}

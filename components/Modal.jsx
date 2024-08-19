"use client";
import img1 from "@/assets/anime_posters/1.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";

const defaultPoster = {
  id: "1",
  image: img1,
  title: "5 Centemeters Per Second",
};

function Modal({ poster = defaultPoster }) {
  const router = useRouter();

  const dismis = () => {
    router.back();
  };

  return (
    <>
      <div
        onClick={dismis}
        className=" fixed top-0 left-0 bg-black w-screen h-screen opacity-50"
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 container bg-gray-800 p-9 text-center">
        <h1 className="text-center text-3xl">This is title</h1>
        <div className="w-96 my-6 mx-auto">
          <Image
            width={1000}
            height={1000}
            className="w-auto h-auto"
            src={poster?.image}
            alt="this is poster"
          />
        </div>
      </div>
    </>
  );
}

export default Modal;

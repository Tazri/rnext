import React from "react";
import img1 from "@/assets/anime_posters/1.webp";
import Image from "next/image";
import Link from "next/link";
import getPosters from "@/libs/getPosters";

const defaultPoster = {
  id: "1",
  image: img1,
  title: "5 Centemeters Per Second",
};

function SinglePoster({ params: { id } }) {
  const poster = getPosters().find(
    (poster) => parseInt(poster?.id) === parseInt(id)
  );

  return (
    <div className="container mx-auto my-11 shadow-xl p-4">
      <h1 className="text-4xl text-center capitalize my-3">{poster?.title}</h1>
      <div>
        <Image
          width={1000}
          height={1000}
          className="w-96 h-auto mx-auto my-10"
          src={poster?.image}
          alt="this is poster"
        />
      </div>
      <Link
        href="/galary"
        className="text-center block text-4xl bg-emerald-600 w-fit mx-auto px-4 py-3 rounded-md"
      >
        &lt; Go Back
      </Link>
    </div>
  );
}

export default SinglePoster;

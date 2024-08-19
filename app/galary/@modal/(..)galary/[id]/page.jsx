import img1 from "@/assets/anime_posters/1.webp";
import Image from "next/image";
import Link from "next/link";
import getPosters from "@/libs/getPosters";
import Modal from "@/components/Modal";

function GalaryPage({ params: { id } }) {
  const poster = getPosters().find(
    (poster) => parseInt(poster?.id) === parseInt(id)
  );
  return <Modal poster={poster} />;
}

export default GalaryPage;

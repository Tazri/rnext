import Image from "next/image";
import Link from "next/link";

function Card({ card }) {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <Link href={`/galary/${card?.id}`}>
        <figure>
          <Image
            height={1000}
            width={1000}
            src={card?.image}
            alt="Shoes"
            className="w-auto h-auto"
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{card?.title}</h2>
        <p>{card?.title}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

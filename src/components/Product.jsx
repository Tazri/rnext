import { Button, Card } from "keep-react";
import { useState } from "react";
import DetailsModal from "./DetailsModal";

export default function Product({ product }) {
  const [show, setShow] = useState(false);
  const { description, price, title, thumbnail } = product;

  return (
    <>
      <DetailsModal
        isOpen={show}
        closeModal={() => setShow(false)}
        title={title}
      />
      <Card className="max-w-md bg-slate-950 border-none card flex flex-col justify-between">
        <img src={thumbnail} className="h-80 object-cover" alt={title} />
        <Card.Content>
          <Card.Title className="text-slate-400">{title}</Card.Title>
          <Card.Description className="text-slate-500">
            {description}
          </Card.Description>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl">{price} $</span>
            <Button
              size="sm"
              className="bg-slate-100 text-slate-950 hover:text-white"
              onClick={() => setShow(true)}
            >
              Buy Now
            </Button>
          </div>
        </Card.Content>
      </Card>
    </>
  );
}

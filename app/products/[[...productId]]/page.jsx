export default function ProductPage({ params }) {
  const { productId } = params;
  return (
    <div className="border p-4 container mx-auto">
      <h1 className="text-3xl text-center p-4">Single Product Page</h1>
      <ul className="flex flex-wrap gap-3">
        {productId?.map((product) => {
          return (
            <li
              key={crypto.randomUUID()}
              className="bg-orange-600 text-white px-3 py-2 rounded-full text-xl"
            >
              {product}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

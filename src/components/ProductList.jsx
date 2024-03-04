export default function ProductList({
  isLoading,
  products,
  error,
  onSelect,
  children,
}) {
  if (isLoading) {
    return (
      <div className="text-3xl text-center my-4 text-orange-900">
        Fetching Products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-3xl text-center my-4 text-rose-900">
        An Error Occurd: {error.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-3/5">
      <h2 className="text-3xl my-2">Product List</h2>

      <ul className="flex flex-wrap justify-center items-center">
        {products &&
          products.map((product) => {
            return (
              <li
                key={product.id}
                className="flex flex-col items-center m-2 border rounded-sm"
                onClick={() => onSelect(product.id)}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="object-cover h-40 w-80 rounded-sm"
                />
                <p className="text-xl my-3">{product.title}</p>
              </li>
            );
          })}
      </ul>
      {children}
    </div>
  );
}

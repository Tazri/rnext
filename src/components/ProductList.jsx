import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import Product from "./Product";

function getUrl(page) {
  const productPerPage = 10;

  const url = `https://dummyjson.com/products?limit=${productPerPage}&skip=${
    page * productPerPage
  }`;

  return url;
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(getUrl(page));

      const data = await res.json();

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => {
          return [...prevProducts, ...data.products];
        });

        setPage((prevPage) => prevPage + 1);
      }
    };

    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [hasMore, page]);

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-2xl text-center">Product List</h2>
      <div className="grid grid-cols-2 gap-7 mt-10">
        {products.map((product) => (
          <Product key={crypto.randomUUID()} product={product} />
        ))}
      </div>
      {hasMore && (
        <div ref={loaderRef} className="flex flex-col items-center mt-20">
          <Loader />
          <p className="text-center text-blue-600 text-lg">Loading Data</p>
        </div>
      )}
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useState } from "react";
import AddProduct from "./components/AddProduct";
import Pagination from "./components/Pagination";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

const retrieveProducts = async ({ queryKey }) => {
  const product = queryKey[0];
  const page = queryKey[1];

  const respone = await axios.get(
    `http://localhost:3000/${product}?_${page}&_per_page=2`
  );

  return respone.data;
};

export default function App() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useQuery({
    queryKey: ["products", `page=${page}`],
    queryFn: retrieveProducts,
  });

  const [selectedId, setSelectedId] = useState(null);

  function handleSelecteId(id) {
    setSelectedId(id);
  }

  function handleChanePage(pageNo) {
    if (pageNo) setPage(pageNo);
  }

  const { data: products = [], first, prev, next, last } = data || {};

  return (
    <div className="flex m-2">
      <AddProduct />
      <ProductList
        onSelect={handleSelecteId}
        products={products}
        isLoading={isLoading}
        error={error}
      >
        <Pagination
          page={page}
          lastPage={last}
          onNext={() => handleChanePage(next)}
          onPrev={() => {
            handleChanePage(prev);
          }}
          onFirst={() => handleChanePage(first)}
          onLast={() => handleChanePage(last)}
        />
      </ProductList>
      <ProductDetails
        page={page}
        goFirstPage={() => setPage(1)}
        unSelect={() => setSelectedId(null)}
        id={selectedId}
      />
    </div>
  );
}

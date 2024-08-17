import React from "react";
import ProductCard from "./ProductCard";
import ProductSection from "./ProductSection";
import data from "@/data.json";

function CardContainer() {
  const products = data?.products;

  return (
    <main>
      {/* Product section start */}
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {products?.map((product) => {
            return <ProductCard product={product} key={product?.id} />;
          })}
        </div>
      </section>
      {/* Product section start */}
      <ProductSection />
    </main>
  );
}

export default CardContainer;

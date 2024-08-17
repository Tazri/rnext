import ProductSection from "@/components/homepage/ProductSection";
import CategoryMenu from "@/components/productPage/CategoryMenu";
import CategoryProductCard from "@/components/productPage/CategoryProductCard";
import data from "@/data.json";

function CategoryNamePage({ params: { categoryName } }) {
  const products = data?.products;

  const filterProduct = products?.filter(
    (product) => product?.category === categoryName
  );

  return (
    <main>
      {/* Product section start */}
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <CategoryMenu activeCategory={categoryName} />
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {filterProduct?.map((product) => {
            return <CategoryProductCard product={product} key={product?.id} />;
          })}
        </div>
      </section>
      {/* Product section start */}
      <ProductSection />
    </main>
  );
}

export default CategoryNamePage;

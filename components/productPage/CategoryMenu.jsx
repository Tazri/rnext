import Link from "next/link";
import data from "@/data.json";

function CategoryMenu({ activeCategory = "" }) {
  const products = data?.products;
  const categoryNames = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <Link
        href="/category"
        className={`hover:border-b w-fit border-black block h-6 box-border mt-4 ${
          activeCategory ? "" : "border-b"
        }`}
      >
        All
      </Link>
      {categoryNames.map((category) => {
        return (
          <Link
            href={`/category/${category}`}
            key={category}
            className={`hover:border-b w-fit border-black block h-6 box-border mt-5 capitalize ${
              activeCategory === category ? "border-b" : ""
            }`}
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
}

export default CategoryMenu;

import DefaultImage from "@/assets/failback.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import data from "@/data.json";

function ProductPage({ params: { productId } }) {
  const products = data?.products;
  const product = products?.find((product) => {
    return String(product?.id) === productId;
  });

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src={product?.thumbnail ? product.thumbnail : DefaultImage}
              width={400}
              height={500}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt=""
            />

            <div className="flex gap-4 mt-4">
              {product?.images?.map((imgUrl) => {
                return (
                  <Image
                    key={imgUrl}
                    src={imgUrl ? imgUrl : DefaultImage}
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] mx-auto border object-cover"
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              iPhone 9
            </h1>
            <span className="text-[#919090] my-3">Smartphone</span>
            <div className="mt-3 flex items-center justify-start gap-1">
              <FaStar className="text-emerald-600" />
              <FaStar className="text-emerald-600" />
              <FaStar className="text-emerald-600" />
              <FaStar className="text-emerald-600" />
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${product?.price}
                </span>
                <span className="font-bold text-2xl">
                  $
                  {(
                    parseInt(product?.price) *
                    (1 - parseInt(product?.discountPercentage) / 100)
                  ).toFixed(2)}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">
                Enhance your dining space with this sleek, contemporary dining
                table, crafted from high-quality solid wood with a warm finish.
                Its sturdy construction and minimalist design make it a perfect
                addition for any home looking for a touch of elegance.
                Accommodates up to six guests comfortably and includes a
                striking fruit bowl centerpiece. The overhead lighting is not
                included.
              </p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - $195
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const retrieveProduct = async ({ queryKey }) => {
  if (queryKey[1] === null) {
    return null;
  }

  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );

  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(`http://localhost:3000/products/${id}`);

  return response.data;
};

export default function ProductDetails({ id, page, unSelect, goFirstPage }) {
  const queryClient = useQueryClient();
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retrieveProduct,
  });

  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      console.log("Deleted");
      console.log(data);
      unSelect();

      if (page == 1) {
        queryClient.invalidateQueries(["products", "page=1"]);
      } else {
        goFirstPage();
      }
    },
  });

  const handleDelete = () => {
    mutation.mutate(id);
  };

  if (mutation.isPending) {
    return (
      <div className="text-3xl text-center my-4 text-orange-900">Deleting</div>
    );
  }

  if (product === null) {
    return (
      <div className="text-3xl text-center my-4 text-orange-900">
        Please Select The Item.
      </div>
    );
  }

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
    <div className="w-1/5">
      <h1 className="text-3xl my-2">Product Details</h1>
      <div className="border bg-gray-100 p-3 text-md rounded flex flex-col">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover h-24 w-24 rounded-full m-auto"
        />

        <p className="text-2xl mt-1 mb-3 text-center">{product.title}</p>
        <p className="text-lg text-center text-slate-600">
          {product.description}
        </p>
        <p className="text-center text-slate-900">USD {product.price}</p>
        <p className="text-center text-xl">{product.rating}/5</p>

        <button
          onClick={handleDelete}
          className="mt-4 py-2 px-4 bg-rose-800 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

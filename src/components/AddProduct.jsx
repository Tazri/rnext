import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function AddProduct() {
  const queryClient = useQueryClient();
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 0,
    thumbnail: "",
  });

  const mutation = useMutation({
    mutationFn: (newProduct) => {
      axios.post("http://localhost:3000/products", newProduct);
    },
    onSuccess: (data, variables, context) => {
      console.log("context : ");
      console.log(context);

      queryClient.invalidateQueries(["products"]);
    },
    onMutate: () => {
      return { greeting: "Say Hello," };
    },
  });

  const submitData = (e) => {
    e.preventDefault();
    const newData = {
      ...state,
      id: crypto.randomUUID().toString().split("-").join(""),
    };
    mutation.mutate(newData);
  };

  const handleChange = (e) => {
    setState((s) => {
      const name = e.target.name;
      const value =
        e.target.type === "number"
          ? e.target.valueAsNumber
          : event.target.value;
      return {
        ...s,
        [name]: value,
      };
    });
  };

  if (mutation.isError) {
    return (
      <div>
        <h1 className="text-3 text-rose-600">
          There was error in server side.
        </h1>
      </div>
    );
  }

  if (mutation.isPending) {
    return (
      <div>
        <h1 className="text-3 text-orange-600">
          There was error in server side.
        </h1>
      </div>
    );
  }

  return (
    <div className="m-2 p-2 bg-gray-100 w-1/5 h-1/2">
      <h2 className="text-2xl my-2">Add a Product</h2>
      <form onSubmit={submitData} className="flex flex-col">
        <input
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter a Product Title"
        />

        <textarea
          type="text"
          value={state.description}
          name="description"
          onChange={handleChange}
          className="my-2 border p-2 h-20 rounded"
          placeholder="Enter aproduct title"
        />

        <input
          type="number"
          min={0}
          value={state.price}
          name="price"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter a Price"
        />

        <input
          type="url"
          value={state.thumbnail}
          name="thumbnail"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="https://thumbnail/url"
        />

        <button
          disabled={0}
          type="submit"
          className="bg-black m-auto text-white text-xl p-2 rounded-md cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
}

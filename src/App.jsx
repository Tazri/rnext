import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-w-screen min-h-screen">
      <h1 className="text-3xl text-center py-4">React Infinite Scroll</h1>

      <ProductList />
    </div>
  );
}

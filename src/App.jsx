import { Suspense, useState } from "react";
import { demos } from "./data/demos";
import importDemo from "./utils/importDemo";

function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const loadDemo = async (file) => {
    const Demo = await importDemo(file);

    return <Demo />;
  };

  const selectDemo = async (file) => {
    const Demo = await loadDemo(file);

    setSelectedDemo(Demo);
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl py-3">React Lazy Load explained</h1>

        <div className="flex gap-x-5 justify-center">
          {demos.map((demo) => {
            return (
              <button
                key={demo.name}
                onClick={() => {
                  selectDemo(demo.file);
                }}
                className="py-2 px-4 bg-rose-800 text-white"
              >
                {demo.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t-2 mt-5 pt-10">
        <Suspense
          fallback={
            <h1 className="text-center bg-black text-white py-2 text-3xl">
              Data is Loading...
            </h1>
          }
        >
          {selectedDemo}
        </Suspense>
      </div>
    </div>
  );
}

export default App;

import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Comments from "./components/Comments";
import PostsSelector from "./components/PostsSelector";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };

  return (
    <div>
      <h1 className="text-center text-4xl my-4">
        React Suspense and Error Boundaries
      </h1>

      <div className="w-[60%] mx-auto my-3 flex flex-col gap-y-4">
        <ErrorBoundary
          fallback={
            <h1 className="my-2 py-2 text-center text-3xl bg-rose-950 text-white">
              Error Fetching Posts
            </h1>
          }
        >
          <Suspense
            fallback={
              <h1 className="my-2 py-2 text-center text-3xl bg-slate-950 text-white">
                Loading Post..........
              </h1>
            }
          >
            <PostsSelector onSelectPost={handleSelectPost} />
          </Suspense>
        </ErrorBoundary>
        {selectedPostId && (
          <ErrorBoundary
            fallback={
              <h1 className="my-2 py-2 text-center text-3xl bg-rose-950 text-white">
                Error Fetching Comments
              </h1>
            }
          >
            <Suspense
              fallback={
                <h1 className="my-2 py-2 text-center text-3xl bg-slate-950 text-white">
                  Loading Comments..........
                </h1>
              }
            >
              <Comments postId={selectedPostId} />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

export default function Posts() {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let ignore = false;
    setTimeout(() => {
      if (!ignore) {
        dispatch(fetchPosts());
      }
    }, 100);

    return () => {
      ignore = true;
    };
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <div>Loading Posts</div>
      </div>
    );
  }

  if (!isLoading && isError) {
    return (
      <div>
        <h1>Error : {error}</h1>
      </div>
    );
  }

  if (!isLoading && !isError && posts.length === 0) {
    return (
      <div>
        <h1>No Posts Found</h1>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

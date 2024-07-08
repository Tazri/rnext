import { useEffect, useReducer } from "react";
import { actions } from "../action/index.js";
import { initialState, postReducer } from "../reducers/postReducer";
import PostList from "./../components/posts/PostList";
import { useAxios } from "./../hooks/useAxios.js";

export default function HomePage() {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const api = useAxios();

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });

    async function fetchPost() {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );

        if (response.status === 200) {
          dispatch({ type: actions.post.DATA_FETCHED, data: response.data });
        }
      } catch (err) {
        dispatch({ type: actions.post.DATA_FETCH_ERROR, error: err.message });
      }
    }

    fetchPost();
  }, []);
  if (state?.loading) {
    return <div>Data is loading....</div>;
  }

  if (state?.error) {
    return (
      <div>
        <p>There is something wrong in fetching post...</p>
        <span>{state?.error?.message}</span>
      </div>
    );
  }

  return (
    <>
      <div>
        <PostList posts={state?.posts} />
      </div>
    </>
  );
}

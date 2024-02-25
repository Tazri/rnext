import { useEffect, useState } from "react";
import api from "./api/api.js";
import AddPost from "./components/AddPost.jsx";
import EditPost from "./components/EditPost.jsx";
import Posts from "./components/Posts.jsx";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const handleAddPost = async (newPost) => {
    try {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;

      const finalPost = {
        id: id.toString(),
        ...newPost,
      };

      const response = await api.post("posts", finalPost);

      setPosts([...posts, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeletePost = async (postId) => {
    if (confirm("Are you sure you want to delete the post ?")) {
      try {
        await api.delete(`posts/${postId}`);

        const newPosts = posts.filter((post) => post.id !== postId);
        setPosts(newPosts);
      } catch (err) {
        setError(err.message);
      }
    } else {
      console.log("You choose not to delete the post!");
    }
  };

  const handleEditPost = async (updatedPost) => {
    try {
      const response = await api.patch(`posts/${updatedPost.id}`, updatedPost);

      const updatedPosts = posts.map((post) => {
        return post.id === response.data.id ? response.data : post;
      });

      setPosts(updatedPosts);
      setPost(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("posts");

        if (response && response.data) {
          setPosts(response.data);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div className="w-[60%] mx-auto my-4 text-center">
        <h1 className="text-4xl my-3">API Request with Axios</h1>

        <hr className="mb-3" />

        <div>
          <Posts
            posts={posts}
            onDeletePost={handleDeletePost}
            onEditClick={setPost}
          />

          <hr className="my-6" />

          {!post ? (
            <AddPost onAddPost={handleAddPost} />
          ) : (
            <EditPost post={post} onEditPost={handleEditPost} />
          )}

          {error && (
            <>
              <hr className="my-3" />

              <div className="bg-rose-900 text-white p-3">
                <h2 className="text-2xl">Error is happend</h2>
                {error}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

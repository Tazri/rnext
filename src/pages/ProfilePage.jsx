import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import { useAxios } from "./../hooks/useAxios.js";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { auth } = useAuth();

  const api = useAxios();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );

        setUser(res?.data.user);
        setPosts(res?.data.posts);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchProfile();
  }, []);

  if (loading) {
    return <h1>Fetching</h1>;
  }

  if (error) {
    return <h1>Something is wrong</h1>;
  }

  return (
    <div>
      <h1>{user?.firstName}</h1>
      <h1>You have {posts.length} posts</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

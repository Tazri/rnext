import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/profile/${auth?.user?.id}`);

        setUser(res?.data.user);
        setPosts(res?.data.posts);
      } catch (err) {
        console.log(err);
        setErr(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [api, auth]);

  if (loading) {
    return <div>Fetching your data</div>;
  }

  if (err) {
    return <div>Somthing is wrong.</div>;
  }

  return (
    <div>
      <h1>
        Welcome, {user?.firstName} {user?.lastName}
      </h1>

      <p>You have {posts.length} posts.</p>
    </div>
  );
}

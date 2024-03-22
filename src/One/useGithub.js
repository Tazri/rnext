import { useDebugValue, useEffect, useState } from "react";

export default function useGithub(username) {
  console.log("Below is use debu");
  useDebugValue(`Fetching data for ${username}`);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const resData = await res.json();
        setUser(resData);
        setLoading(false);
        console.log("> Console from useGithub file : ");
        console.log(resData);
      } catch (error) {
        setError(error);
      }
    };

    let ignore = false;

    setTimeout(() => {
      if (!ignore) {
        fetchData();
      }
    });

    return () => {
      ignore = true;
    };
  }, [username]);

  return { user, loading, error };
}

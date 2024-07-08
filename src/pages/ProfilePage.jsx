import { useEffect } from "react";
import { actions } from "../action/index.js";
import MyPosts from "../components/profile/MyPosts.jsx";
import ProfileInfo from "../components/profile/ProfileInfo.jsx";
import useAuth from "../hooks/useAuth.js";
import { useAxios } from "./../hooks/useAxios.js";
import useProfile from "./../hooks/useProfile.js";

function ProfilePage() {
  const { state, dispatch } = useProfile();
  const { auth } = useAuth();

  const api = useAxios();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );

        if (res.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: res.data });
        }
      } catch (err) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: err.message,
        });
      }
    };

    dispatch({ type: actions.profile.DATA_FETCHING });
    fetchProfile();
  }, []);

  if (state?.loading) {
    return <h1>Fetching</h1>;
  }

  if (state?.error) {
    return <h1>Something is wrong</h1>;
  }

  return (
    <>
      <ProfileInfo />
      <MyPosts />
    </>
  );
}

export default ProfilePage;

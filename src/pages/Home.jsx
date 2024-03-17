import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  function handleLogOut() {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("> Signed Out");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (loading) {
    return (
      <p className="text-3xl text-center my-3 text-slate-900">
        User info loading....
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-3xl text-center my-3 text-rose-900">
        Somthing is wrong....
      </p>
    );
  }

  if (!user) {
    return (
      <p className="text-3xl text-center my-3 text-rose-900">
        Your are not log in yet.{" "}
        <NavLink to="/login" className="underline">
          Log in
        </NavLink>
      </p>
    );
  }

  return (
    <div className="w-[60%] mx-auto my-4 p-3 flex flex-col gap-y-4">
      <p className="text-emerald-800 text-2xl">Welcome, {user.email} </p>
      <button
        className="px-4 py-2 bg-emerald-800 text-white"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
}

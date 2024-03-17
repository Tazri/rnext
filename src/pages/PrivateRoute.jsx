import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

export default function PrivateRoute() {
  const [user, loading, error] = useAuthState(auth);

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

  return <>{user ? <Outlet /> : <Navigate to="login" />}</>;
}

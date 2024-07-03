import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const { auth } = useAuth();

  console.log("> PrivateRoute -> auth");
  console.log(auth);
  return (
    <>
      {auth.user ? (
        <>
          <Header />
          <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
              <Outlet />
            </div>
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

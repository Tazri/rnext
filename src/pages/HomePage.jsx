import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <h1 className="text-center text-3xl  my-3">Home Page</h1>
      <Link to="/me">Profile Page</Link>
    </div>
  );
}

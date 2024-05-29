import { Link } from "react-router-dom";
import { useAuth } from "./../hooks/useAuth";

export default function HomePage() {
  const { auth } = useAuth();
  console.log("Auth from home : ");
  console.log(auth);
  return (
    <div>
      <h1 className="text-3xl text-center my-2 text-whtie">HomePage</h1>
      <Link to="/me">Go to profile page</Link>
    </div>
  );
}

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  loginWithEmailAndPassword,
  signInWithFacebook,
  signInWithGoogle,
} from "../firebase";

export default function Login() {
  const nevigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const res = await loginWithEmailAndPassword(email, password);
      console.log(res);
      nevigate("/home");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSocialLogIn(type) {
    try {
      if (type == "google") {
        await signInWithGoogle();
      } else if (type == "facebook") {
        await signInWithFacebook();
      }
      nevigate("/home");
    } catch (err) {
      console.log("Error for log in with google, from log in component.");
      console.log(err);
    }
  }

  return (
    <div className="mx-auto my-10">
      <h1 className="text-3xl my-4 text-center text-slate-900">Login</h1>

      <form className="flex m-3 flex-col bg-slate-100 text-slate-950 p-4 gap-y-4">
        <div>
          <label className="flex items-center gap-x-5" htmlFor="email">
            Email Address :
            <input
              className="p-1 border-1 border-slate-700"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ans.anonymo@gmail.com"
            />
          </label>
        </div>
        <div>
          <label className="flex items-center gap-x-5" htmlFor="email">
            Password :
            <input
              className="p-2 border-1 border-slate-700"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="ansaAnonymo@123"
            />
          </label>
        </div>

        <button
          className="py-2 px-4 bg-emerald-800 self-center text-white"
          type="submit"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <button
          className="py-2 px-4 bg-orange-800 self-center text-white"
          type="button"
          onClick={() => handleSocialLogIn("google")}
        >
          Log in With Google
        </button>
        <button
          className="py-2 px-4 bg-blue-800 self-center text-white"
          type="button"
          onClick={() => handleSocialLogIn("facebook")}
        >
          Log in With Facebook
        </button>
      </form>
      <p className="text-center">
        No Account ?{" "}
        <NavLink className="text-emerald-800 underline" to="/register">
          Register
        </NavLink>
      </p>

      <p className="text-center">
        Forgot Password ?{" "}
        <NavLink className="text-rose-800 underline" to="/reset">
          Reset Your Password
        </NavLink>
      </p>
    </div>
  );
}

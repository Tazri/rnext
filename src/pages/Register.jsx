import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { resigerWithEmailAndPassword } from "./../firebase";

export default function Register() {
  const nevigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const user = await resigerWithEmailAndPassword(email, password);
      console.log(user);
      nevigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="mx-auto my-10">
      <h1 className="text-3xl my-4 text-center text-slate-900">Register</h1>

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
          Register
        </button>
      </form>
      <p className="text-center">
        Already have a account ?{" "}
        <NavLink className="underline text-emerald-800" to="/login">
          Sign in
        </NavLink>
      </p>
    </div>
  );
}

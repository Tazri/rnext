import { useState } from "react";
import { NavLink } from "react-router-dom";
import { sendPasswordReset } from "../firebase";

export default function Reset() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-[60%] mx-auto my-5">
      <h1 className="text-3xl text-emerald-800 text-center my-4">
        Reset Your Password
      </h1>
      <div className="flex flex-col my-4">
        <input
          className="border border-slate-600 p-1 my-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address."
        />

        <button
          className="px-4 py-2 bg-emerald-800 text-white self-center"
          onClick={() => sendPasswordReset(email)}
        >
          Send Password Reset Email.
        </button>
      </div>

      <p className="text-center">
        {"Don't you have an account ? "}
        <NavLink to="/register" className="underline text-emerald-700">
          Register Now
        </NavLink>
      </p>
    </div>
  );
}

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Field from "../common/Field";

export default function LoginForm() {
  const [isSend, setIsSend] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  async function submitForm(formData) {
    try {
      setIsSend(true);
      const url = `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`;

      const res = await axios.post(url, formData);
      if (res.status === 200) {
        const { token, user } = res.data;

        if (token) {
          const authToken = token?.token;
          const refreshToken = token?.refreshToken;

          console.log(`Login Time auth token ${authToken}`);

          setAuth({ user, authToken, refreshToken });

          navigate("/");
        }
      }
    } catch (e) {
      setIsSend(false);
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found`,
      });
      console.log(e);
    }
  }

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="Email" htmlFor="email" error={errors.email}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ans.anonymo123@gmail.com"
          {...register("email", {
            required: "Enter Your Email.",
          })}
          className="auth-input"
          style={errors.email ? { border: "2px solid #ef4444" } : {}}
        />
      </Field>

      <Field label="Password" htmlFor="password" error={errors.password}>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="ansa.nonymoA#t0283"
          {...register("password", {
            required: "Enter Your Password.",
          })}
          className="auth-input"
          style={errors.email ? { border: "2px solid #ef4444" } : {}}
        />
      </Field>
      <p>{errors?.root?.random?.message}</p>
      <Field>
        <button
          disabled={isSend}
          className="auth-input disabled:opacity-40 bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        >
          Login
        </button>
      </Field>
    </form>
  );
}

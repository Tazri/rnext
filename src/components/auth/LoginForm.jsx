import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Field from "./../common/Field";

export default function LoginForm() {
  const navigate = useNavigate();
  const { setAuth, auth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitForm(formData) {
    // TODO
    // make api call
    // will return token and logged in user information

    const user = formData;
    setAuth({ ...auth, user });
    navigate("/");
  }

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="Email" error={errors.email}>
        <input
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          {...register("email", {
            required: "Email is required.",
          })}
          type="email"
          name="email"
          id="email"
          placeholder="anonymo123@email.com"
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 character",
            },
          })}
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
          placeholder="anonymo$123"
        />
      </Field>

      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
}

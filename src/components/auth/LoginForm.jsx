import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "./../common/Field";

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setAuth } = useAuth();

  const submitForm = (formData) => {
    const user = { ...formData };
    setAuth({ user });
    navigate("/");
  };

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="Email" error={errors.email}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="anonymo123@email.com"
          {...register("email", {
            required: "Email id is required.",
          })}
          className="auth-input"
          style={{
            borderColor: errors.email ? "#dc2626" : "#e5e7eb",
          }}
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          type="password"
          name="password"
          placeholder="anonymo@123!!"
          id="password"
          {...register("password", {
            required: "password is required.",
            minLength: {
              value: 8,
              message: "password should be 8 character.",
            },
          })}
          className="auth-input"
          style={{
            borderColor: errors.password ? "#dc2626" : "#e5e7eb",
          }}
        />
      </Field>

      <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

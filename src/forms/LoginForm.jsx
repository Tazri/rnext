import { useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    const { email, password } = formData;
    const user = { email: "ans.anonymo@gmail.com", password: "123456789" };
    const found = email === user.email && password == user.password;

    if (!found) {
      setError("root.random", {
        message: `User with email "${email}" is not found`,
        type: "random",
      });
    }
  };
  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(submitForm)}
      >
        <FieldSet label="Enter Login Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              className="p-2 border box-border w-[300px] rounded-md"
              style={{
                borderWidth: "1px",
                borderColor: errors.email
                  ? "rgb(244,63,94)"
                  : "rgb(229,231,235)",
              }}
              type="email"
              name="email"
              id="email"
              placeholder="anonymo@gmail.com"
            />
          </Field>

          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be at 8 character.",
                },
                maxLength: {
                  value: 65,
                  message: "Your password must be under 65 character.",
                },
              })}
              className="p-2 border border-box w-[300px] rounded-md"
              style={{
                borderWidth: "1px",
                borderColor: errors.password
                  ? "rgb(244,63,94)"
                  : "rgb(229,231,235)",
              }}
              type="password"
              name="password"
              id="password"
              placeholder="Anonymo@123$"
            />
          </Field>
        </FieldSet>

        <div className="my-3">{errors?.root?.random?.message}</div>
        <button
          type="submit"
          className="text-md text-white text-md cursor-pointer py-2 px-4 border rounded-lg bg-emerald-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

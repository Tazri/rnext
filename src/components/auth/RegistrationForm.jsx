import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../common/Field";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  async function submitForm(formData) {
    console.log(formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      console.log("here");
      setError("root.random", {
        type: "random",
        message: `Error : ${err.message}`,
      });
    }
  }

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="First Name" error={errors.firstName}>
        <input
          className={`auth-input ${
            errors.firstName ? "border-red-500" : "border-gray-200"
          }`}
          name="firstName"
          id="firstName"
          type="text"
          placeholder="Mr. Anonymo"
          {...register("firstName", {
            minLength: {
              value: 3,
              message: "First Name should minimum 4 character",
            },
            required: "Please enter the first name.",
          })}
        />
      </Field>

      <Field label="Last Name" error={errors.lastName}>
        <input
          className={`auth-input ${
            errors.lastName ? "border-red-500" : "border-gray-200"
          }`}
          name="lastName"
          id="lastName"
          type="text"
          placeholder="Mr. Anonymo"
          {...register("lastName", {
            minLength: {
              value: 4,
              message: "Last Name should minimum 4 character",
            },
            required: "Please enter the last name.",
          })}
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          placeholder="anonymo@123"
          type="email"
          name="email"
          id="email"
          {...register("email", {
            required: "Email is required.",
          })}
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          id="password"
          name="password"
          placeholder="anonymo$123"
          {...register("password", {
            required: "Password should be required",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 character.",
            },
          })}
        />
      </Field>

      <p className="py-2 text-red-500">{errors?.root?.random?.message}</p>

      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Register
        </button>
      </Field>
    </form>
  );
}

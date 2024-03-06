import { Controller, useFieldArray, useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
import NumberInput from "./NumberInput";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();

  const { fields, remove, append } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(submitForm)}
      >
        <FieldSet label="Enter Your Basic Details">
          <Field label="Picture" error={errors.picture}>
            <input
              {...register("picture", {
                required: "Picture is rquired",
              })}
              type="file"
              id="picture"
              name="picture"
            />
          </Field>
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

          <Field label="Full Name" error={errors.fname}>
            <input
              {...register("fname", {
                required: "Full name is required",
                minLength: {
                  value: 4,
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
                borderColor: errors.fname
                  ? "rgb(244,63,94)"
                  : "rgb(229,231,235)",
              }}
              type="text"
              name="fname"
              id="fname"
              placeholder="Ans Anonymo"
            />
          </Field>

          <Field label="Age" error={errors.age}>
            <Controller
              name="age"
              control={control}
              // eslint-disable-next-line no-unused-vars
              render={({ field: { ref, ...field } }) => {
                return (
                  <NumberInput
                    id="age"
                    name="age"
                    placeholder="12"
                    className="p-2 border box-border w-full rounded-md"
                    style={{
                      borderWidth: "1px",
                      borderColor: errors.age
                        ? "rgb(244,63,94)"
                        : "rgb(229,231,235)",
                    }}
                    {...field}
                  />
                );
              }}
              rules={{
                required: "Age is Required.",
                max: {
                  value: 100,
                  message: "Age must be under 100",
                },
                min: {
                  value: 8,
                  message: "Age must be above 8",
                },
              }}
            />
          </Field>
        </FieldSet>

        <FieldSet label="Enter Your Social Handles">
          {fields.map((field, index) => {
            return (
              <div
                className="flex justify-between items-center w-max"
                key={field.id}
              >
                <Field label="Social Name">
                  <input
                    className="p-2 border box-border w-full rounded-md"
                    type="text"
                    {...register(`socials[${index}].name`)}
                    id={`socials[${index}].name`}
                    name={`socials[${index}].name`}
                  />
                </Field>

                <Field label="Social URL">
                  <input
                    className="p-2 border box-border w-full rounded-md"
                    type="text"
                    {...register(`socials[${index}].url`)}
                    id={`socials[${index}].url`}
                    name={`socials[${index}].url`}
                  />
                </Field>

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="mt-8 mr-2 text-white bg-rose-900 p-2"
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            type="button"
            className="py-2 px-4 bg-slate-900 text-white my-4"
            onClick={() => append({ name: "", url: "" })}
          >
            Add A Social Handle
          </button>
        </FieldSet>

        <div className="my-3">{errors?.root?.random?.message}</div>
        <button
          type="submit"
          className="text-md text-white text-md cursor-pointer py-2 px-4 border rounded-lg bg-emerald-800"
        >
          Register
        </button>
      </form>
    </div>
  );
}

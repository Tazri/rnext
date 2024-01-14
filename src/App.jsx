import { useImmer } from "use-immer";
import Field from "./Field";

export default function Counter() {
  const [data, updateData] = useImmer({
    name: "",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    console.log(data);
    updateData({
      name: "",
      email: "",
      password: "",
    });
    e.preventDefault();
  }

  function handleChange(e) {
    updateData((draft) => {
      draft[e.target.name] = e.target.value;
    });
  }

  return (
    <div className="bg-slate-700 text-white text-center p-8">
      <h2 className="text-3xl">Form</h2>
      <form
        onSubmit={handleSubmit}
        className="p-4 flex flex-col gap-y-4 border-2 w-[60%] min-w-[400px] mx-auto my-4 content-center"
      >
        <Field
          fieldName={"Name"}
          name={"name"}
          placeholder="Enter Your Name"
          value={data.name}
          handleChange={handleChange}
          type="text"
        />

        <Field
          fieldName={"Email"}
          name={"email"}
          placeholder="Enter Your Email"
          value={data.email}
          handleChange={handleChange}
          type="email"
        />

        <Field
          fieldName={"password"}
          name={"password"}
          placeholder="Enter Your Password"
          value={data.password}
          handleChange={handleChange}
          type="password"
        />

        <input
          type="submit"
          value="Submit"
          className="bg-white text-slate-700 cursor-pointer"
        />
      </form>
    </div>
  );
}

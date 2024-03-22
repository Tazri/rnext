import InputField from "./InputField";

const data = [1, 2, 3, 4, 5];

export default function IdForm() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl my-3">This is a simple form</h1>

      <form className="flex flex-col gap-y-5">
        <InputField label="First Name : " />
        <InputField label="Last Name : " />
      </form>

      <div className="flex gap-x-3 mt-8">
        {data.map((item) => {
          return (
            <div
              key={item}
              className="flex items-center justify-center text-2xl w-10 h-10 rounded-full bg-blue-900 text-white"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

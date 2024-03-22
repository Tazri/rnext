import { useId } from "react";

export default function InputField({ label }) {
  const id = useId();
  return (
    <div className="mx-2">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className="border mx-2 rounded border-slate-200"
      />
    </div>
  );
}

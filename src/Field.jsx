/* eslint-disable react/prop-types */
export default function Field({
  fieldName,
  name,
  value,
  handleChange,
  type,
  placeholder,
}) {
  return (
    <label
      htmlFor={name}
      className="flex flex-row flex-wrap gap-4 items-center "
    >
      <span>{fieldName} :</span>
      <input
        className="px-2 py-1 text-slate-900 flex-grow"
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </label>
  );
}

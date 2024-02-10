export default function DropDown({ label, options, onChange, value }) {
  const entries = Object.entries(options);

  return (
    <>
      <label className="flex flex-row flex-wrap">
        {label && <p className="p-2 text-lg">{label}</p>}
        <select
          id="rooms"
          className="py-2 px-4 bg-emerald-800 focus:outline-none cursor-pointer"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {entries.map((option) => {
            return (
              <option key={option[0]} name={option[0]} value={option[0]}>
                {option[1]}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
}

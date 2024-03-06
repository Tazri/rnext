export default function NumberInput({ value, onChange, ...rest }) {
  const handleChange = (e) => {
    const value = e.target.valueAsNumber || 0;
    onChange(value);
  };
  return (
    <input type="number" onChange={handleChange} value={value} {...rest} />
  );
}

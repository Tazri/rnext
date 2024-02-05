export default function Button({
  color,
  onClick = () => {
    console.log("Clicked");
  },
  children,
}) {
  const className = `bg-${color}-700 py-2 px-4`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

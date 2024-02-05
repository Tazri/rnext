export default function CatList({ children }) {
  return (
    <>
      <div className="w-full">
        <ul className="overflow-hidden w-full whitespace-nowrap">{children}</ul>
      </div>
    </>
  );
}

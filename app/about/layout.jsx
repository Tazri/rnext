export default function AboutLayout({ children }) {
  console.log("about layout");
  return (
    <>
      <h1 className="text-3xl py-4 text-center">About Layout</h1>

      {children}
    </>
  );
}

export default function CatImage({ src, alt }) {
  return (
    <img className="border-2 border-slate-700 w-full" src={src} alt={alt} />
  );
}

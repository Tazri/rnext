import { Link, Outlet } from "react-router-dom";

const components = [
  {
    path: "/simple",
    name: "Simple Animation",
  },
  {
    path: "/button-tap",
    name: "ButtonTap Animation",
  },
  {
    path: "/counter",
    name: "Counter Animation",
  },
  {
    path: "/keyframe",
    name: "Keyframe Animation",
  },
  {
    path: "/scroll-reveal",
    name: "ScrollReveal Animation",
  },
  {
    path: "/text-motion",
    name: "TextMotion Animation",
  },
  {
    path: "/transition-type",
    name: "TransitionType Animation",
  },
  {
    path: "/variants",
    name: "Variants Animation",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-3xl mb-4">All Animation Link</h1>
      <ul className="grid grid-cols-5 items-center gap-4">
        {components.map(({ path, name }) => {
          return (
            <li key={path} className="bg-rose-900 text-white py-1 px-2">
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <hr className="w-full h-[2px] bg-slate-600 my-5" />
      <Outlet />
    </div>
  );
}

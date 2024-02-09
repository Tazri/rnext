import useOnlineStatus from "./useOnlineStatus.js";

export default function App() {
  const online = useOnlineStatus();

  return (
    <>
      <div className="w-1/2 mx-auto p-3 text-center flex flex-col gap-y-4 ">
        {online ? (
          <p className="text-xl py-2 px-4 bg-emerald-900">🛜 Online</p>
        ) : (
          <p className="text-xl py-2 px-4 bg-rose-900">🔴 Offline</p>
        )}
      </div>
    </>
  );
}

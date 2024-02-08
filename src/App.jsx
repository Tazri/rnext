import { useState } from "react";
import Chat from "./Chat";
import Video from "./Video";

export default function App() {
  const [play, setPlay] = useState(false);
  const [con, setCon] = useState(true);

  function handleButton() {
    setPlay((p) => !p);
  }
  return (
    <>
      <div className="mx-auto my-5 p-4 w-1/2 flex flex-col items-center gap-y-5">
        <h2 className="text-3xl">Video</h2>
        <Video isPlaying={play} />

        <div>
          <button
            onClick={handleButton}
            className={`py-2 px-4 bg-${play ? "red" : "green"}-800`}
          >
            {play ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      {/** chatroom */}
      <div className="w-1/2 mx-auto text-center flex flex-col items-center gap-y-4 bg-white text-slate-900 p-4 my-8">
        {con && <Chat isConnect={con} />}

        <button
          onClick={() => setCon((s) => !s)}
          className={`py-2 px-4 bg-${con ? "red" : "green"}-800 text-white`}
        >
          {con ? "Disconnect" : "Connect"}
        </button>
      </div>
    </>
  );
}

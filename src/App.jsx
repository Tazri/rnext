import { useState } from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatRoom from "./ChatRoom";
import DropDown from "./DropDown";

export default function App() {
  const [room, setRoom] = useState("general");
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState("dark");
  const roomsIdOptions = {
    general: "General",
    travel: "Travel",
    education: "Education",
    games: "Games",
    sports: "Sports",
  };

  function handleTheme() {
    setTheme((t) => (t == "dark" ? "light" : "dark"));
  }

  return (
    <>
      <div className="w-1/2 mx-auto p-3 text-center flex flex-col gap-y-4 ">
        <div className="flex flex-row gap-x-5 justify-center">
          <button
            className="py-2 px-4 bg-rose-600"
            onClick={() => setShow((s) => !s)}
          >
            Mount ChatRoom
          </button>

          <button
            className="py-2 px-4 bg-teal-800"
            onClick={() => console.clear()}
          >
            Clear Console
          </button>

          <DropDown
            onChange={(room) => {
              setRoom(room);
            }}
            options={roomsIdOptions}
          />
          <button
            className="py-2 px-4"
            style={{
              backgroundColor: theme == "dark" ? "black" : "white",
              color: theme == "dark" ? "white" : "black",
            }}
            onClick={handleTheme}
          >
            {theme}
          </button>
        </div>

        {show && (
          <ChatRoom theme={theme} key={room} roomId={roomsIdOptions[room]} />
        )}
      </div>
      <ToastContainer
        position="bottom-right"
        closeOnClick={true}
        autoClose={2000}
        transition={Slide}
        limit={1}
        theme={theme}
      />
    </>
  );
}

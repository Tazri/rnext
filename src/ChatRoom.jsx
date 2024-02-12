import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
  useState,
} from "react";
import { toast } from "react-toastify";
import { createConnection } from "./utils/connection";

const serverUrl = "server 1";

export default function ChatRoom({ theme, roomId }) {
  const [text, setText] = useState("");
  const notify = useEffectEvent((id) => {
    toast.success("Connected With : " + id, {
      theme: theme,
    });
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);

    connection.connect();
    notify(roomId);

    return () => {
      connection.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  return (
    <>
      <div className="p-4 text-left bg-amber-600">
        <p className="text-2xl mb-2">Connected the room : {roomId}</p>

        <div>
          <input
            className="p-2 text-black focus:outline-none mb-4"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <p className="text-lg text-center bg-rose-800 p-2">
            {text ? text : "!! Empty !!"}
          </p>
        </div>
      </div>
    </>
  );
}

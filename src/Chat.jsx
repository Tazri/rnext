import { useEffect } from "react";
import { createConnection } from "./utils/chat";

export default function Chat({ isConnect }) {
  useEffect(() => {
    const con = createConnection();
    con.connect();

    return () => {
      con.disconnect();
    };
  }, [isConnect]);

  return (
    <>
      <h2 className="text-3xl">Chat Room</h2>
      <p className="text-xl bg-green-700 text-white p-4">
        Connection Successfully !!
      </p>
    </>
  );
}

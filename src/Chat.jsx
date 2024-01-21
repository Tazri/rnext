import { useState } from "react";

export default function Chat({ contact }) {
  const [text, setText] = useState("");
  return (
    <section className="chat flex flex-col gap-4">
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
        className="h-40 p-2 text-teal-900"
      />
      <button className="bg-blue-500 py-2 px-4">Send to {contact.email}</button>
    </section>
  );
}

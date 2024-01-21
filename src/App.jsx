import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div className="flex flex-row m-4 gap-4">
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.name} contact={to} />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

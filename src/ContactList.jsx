export default function ContactList({ selectedContact, contacts, onSelect }) {
  let buttonClassName = "px-4 py-2 w-full";

  return (
    <section className="contact-list">
      <ul className="flex flex-col gap-4">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
              className={
                selectedContact == contact
                  ? buttonClassName + " bg-teal-500"
                  : buttonClassName + " bg-teal-800"
              }
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ModalContent({ onClose }) {
  return (
    <div
      className="flex justify-evenly items-center rounded-lg absolute top-20 left-12 bottom-20 z-10 bg-black text-white p-2"
      role="dialog"
      aria-modal="true"
    >
      <p className="mx-2">Hey I am a modal.</p>
      <button
        className="bg-white text-black p-1 border rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}

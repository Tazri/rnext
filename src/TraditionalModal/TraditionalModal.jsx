import { useState } from "react";
import ModalContent from "../modal/ModalContent";

export default function TraditionalModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden">
      <button
        onClick={() => setShowModal(true)}
        className="bg-black text-white p-1 border rounded"
      >
        Show the Traditional Modal
      </button>

      {showModal && <ModalContent onClose={() => setShowModal(false)} />}
    </div>
  );
}

import { useState } from "react";
import usePortal from "../../Portal/usePortal";
import ModalContent from "../ModalContent";

export default function ProtalModal() {
  const [showModal, setShowModal] = useState(false);
  const Portal = usePortal("portal-root");

  return (
    <div className="relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden">
      <button
        onClick={() => setShowModal(true)}
        className="bg-black text-white p-1 border rounded"
      >
        Modal using react portal.
      </button>

      {showModal && (
        <Portal>
          <ModalContent
            onClose={() => {
              setShowModal(() => false);
            }}
          />
        </Portal>
      )}
    </div>
  );
}

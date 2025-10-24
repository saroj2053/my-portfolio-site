import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfSrc: string;
}
const Modal = ({ isOpen, onClose, pdfSrc }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>

        <iframe
          src={pdfSrc}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Certificate PDF Viewer"
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;

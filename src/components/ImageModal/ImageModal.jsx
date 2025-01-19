import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    background: "transparent",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

Modal.setAppElement("#modal-root");

const ImageModal = ({ modalIsOpen, closeModal, original, thumb }) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Image Modal"
  >
    <img
      src={original}
      alt={thumb || "Gallery"}
      style={{
        maxWidth: "90vw",
        maxHeight: "90vh",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
      }}
    />
  </Modal>
);

export default ImageModal;

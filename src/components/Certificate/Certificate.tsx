import { useState } from "react";
import Modal from "../Modal/Modal";
import { myCertificates } from "../../data/certificates";
import { Element } from "react-scroll";
import "./Certificate.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedPdfUrl, setSelectedPdfUrl] = useState("");

  const openModal = (pdfPath: string) => {
    setSelectedPdfUrl(pdfPath);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPdfUrl("");
  };

  return (
    <Element className="certificate-section" name="certificates">
      <div className="container">
        <div className="CertificateViewer">
          <div className="certificate-section__header">
            <h2>My Certificates</h2>
          </div>
          <div className="certificates">
            {myCertificates.map((cert, index) => (
              <button
                key={index}
                className="cert-button"
                onClick={() => openModal(cert.pdfUrl)}
              >
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
              </button>
            ))}
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            pdfSrc={selectedPdfUrl}
          />
        </div>
      </div>
    </Element>
  );
}

export default App;

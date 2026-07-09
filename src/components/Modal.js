import { useEffect } from "react";
import { useModal } from "../context/ModalContext";
import "../styles/Modal.css";

function Modal({ children }) {

    const { closeModal } = useModal();

    useEffect(() => {

        const handleEsc = (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };

    }, [closeModal]);

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            closeModal();
        }
    };

    return (

        <div
            className="modal-overlay"
            onClick={handleOverlayClick}
        >

            <div className="modal-box">

                <button
                    className="close-btn"
                    onClick={closeModal}
                >
                    ✖
                </button>

                {children}

            </div>

        </div>

    );

}

export default Modal;

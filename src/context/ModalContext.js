import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [activeModal,setActiveModal] = useState("");

    const openModal = (name)=>{
        setActiveModal(name);
    }

    const closeModal = ()=>{
        setActiveModal("");
    }

    return(
        <ModalContext.Provider
        value={{
            activeModal,
            openModal,
            closeModal
        }}
        >
            {children}
        </ModalContext.Provider>
    )

}

export const useModal = ()=> useContext(ModalContext);
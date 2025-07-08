import { createContext, useContext, useState } from "react";
import Modal from "../components/sections/Modal/Modal";

const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState("");

  return (
    <ModalContext.Provider value={{ isModalActive, setIsModalActive }}>
      {children}
    </ModalContext.Provider>
  );
};

function useModalContext() {
  return useContext(ModalContext);
}

export { useModalContext, ModalContextProvider };

'use client'

import Modal from "@/components/modal/main";
import { ModalContext } from "@/context/modal";
import { useState, ReactNode } from "react";

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const showModal = (content: ReactNode) => {
    setModalContent(content);
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isVisible, modalContent, showModal, hideModal }}
    >
      {children}
      <Modal/>
    </ModalContext.Provider>
  );
};

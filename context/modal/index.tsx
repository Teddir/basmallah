'use client'

// context/ModalContext.tsx
import { createContext, useContext, ReactNode } from 'react';

interface ModalContextProps {
  isVisible: boolean;
  modalContent: ReactNode;
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
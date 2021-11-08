import React, { useEffect } from "react";
import styled from "styled-components";

import Portal from "./Portal";

export const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose();
    }
    window.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  if (!open) return null;

  function onOverlayClick() {
    onClose();
  }

  function onDialogClick(e) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <InfoModal onClick={onDialogClick}>{children}</InfoModal>
      </Overlay>
    </Portal>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);

  z-index: 1000;
`;

const InfoModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 144px);
  width: 500px;
  padding: 24px;
  background-color: white;

  box-shadow: 0 0 32px rgba(78, 89, 131, 0.2);
  border-radius: 8px;
`;

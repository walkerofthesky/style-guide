import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  align-items: center;
  background: rgba(25, 25, 25, 0.25);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  pointer-events: ${props => (props.isOpen ? 'unset' : 'none')};
  top: 0;
  transition: opacity 366ms cubic-bezier(0.42, 0, 0.175, 1);
  width: 100%;
  opacity: ${props => (props.isOpen ? 1 : 0)};

  .modal__container {
    background: white;
    border: 1px solid #666;
    border-radius: 4px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    padding: 24px;
    position: absolute;
    transform: ${props => (props.isOpen ? 'scale(1)' : 'scale(0)')};
    transition: transform 366ms cubic-bezier(0.42, 0, 0.175, 1);
  }
`;

const Modal = ({ children, isOpen }) => (
  <StyledModal isOpen={isOpen}>
    <div className="modal__container">{children}</div>
  </StyledModal>
);

export default Modal;

import React from 'react';

const ModalWrapper = ({ children, modal, modalV, closeAnim }) => {
  return (
    <div
      style={{ display: `${modal ? 'flex' : 'none'}`, opacity: `${modalV ? 1 : 0}` }}
      className="modalWrapper"
      onClick={() => {
        closeAnim();
      }}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ display: `${modal ? 'flex' : 'none'}` }}
        className="createTaskModal">
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;

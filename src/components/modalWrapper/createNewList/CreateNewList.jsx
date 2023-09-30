import React, { useState } from 'react';
import ModalWrapper from '../modalWrapper';
import { addListAC } from '../../../store/rootReducer';
import store from '../../../store/store';
//import store from '../../../store/store';

const CreateNewList = () => {
  const [modal, setModal] = useState(false);
  const [modalV, setModalV] = useState(false);
  const [header, setHeader] = useState('');
  const [message, setMessage] = useState('');
  const closeAnim = () => {
    setModalV(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
    document.body.style['overflow-y'] = 'visible';
  };
  const openAnim = () => {
    setModal(true);
    setTimeout(() => {
      setModalV(true);
    }, 300);
    document.body.style['overflow-y'] = 'hidden';
  };
  const createTask = () => {
    if (header !== '') {
      setHeader('');

      store.dispatch(addListAC(header));
      closeAnim();
      setMessage('');
    } else {
      setMessage("header can't be empty");
    }
  };
  return (
    <>
      <div
        onClick={() => {
          openAnim();
        }}
        className="createBtn">
        +
      </div>
      <ModalWrapper modal={modal} modalV={modalV} closeAnim={closeAnim}>
        <>
          <div>
            <p>header</p>
            <input
              onChange={(e) => {
                if (e.target.value !== '') {
                  setMessage('');
                }
                setHeader(e.target.value);
              }}
              value={header}
              type="text"
            />
          </div>

          <button onClick={createTask}>Create list</button>
          <div className="errorMessage">{message}</div>
        </>
      </ModalWrapper>
    </>
  );
};

export default CreateNewList;

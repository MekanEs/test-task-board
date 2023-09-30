import React, { useState } from 'react';
import { UpdateTaskAC } from '../../store/rootReducer';
import store from '../../store/store';
import ModalWrapper from '../modalWrapper/modalWrapper';

const UpdateTask = ({ task, closeAnim, modal, modalV, status }) => {
  const [header, setHeader] = useState(task?.header);
  const [description, setDescription] = useState(task?.description);
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState(task?.priority);

  const updateTask = () => {
    if (header !== '') {
      const newTask = {
        number: task?.number,
        header,
        description,
        sDate: task?.sDate,
        eDate: '',
        priority,
        files: [],
        comment: {}
      };
      store.dispatch(UpdateTaskAC(newTask, status));

      setHeader('');
      setDescription('');
      setPriority(1);

      closeAnim();
      setMessage('');
    } else {
      setMessage("header can't be empty");
    }
  };

  if (!task) {
    return <></>;
  }
  return (
    <ModalWrapper modal={modal} modalV={modalV} closeAnim={closeAnim}>
      <>
        <div>
          <p>{status}</p>
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
        <div>
          <p>description</p>
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            type="text"
          />
        </div>
        <div>
          <p>priority</p>
          <input
            onChange={(e) => {
              if (e.target.value > 1 || e.target.value < 0) {
                e.target.value = 1;
              }
              setPriority(e.target.value);
            }}
            value={priority}
            type="number"
            min={0.1}
            max={1}
            step={0.1}
          />
        </div>

        <button
          onClick={(status) => {
            updateTask(status);
          }}>
          Change task
        </button>
        <div className="errorMessage">{message}</div>
      </>
    </ModalWrapper>
  );
};

export default UpdateTask;

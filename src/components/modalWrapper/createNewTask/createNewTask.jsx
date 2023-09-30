import React, { useState } from 'react';
import ModalWrapper from '../modalWrapper';
import { useSelector } from 'react-redux';
import store from '../../../store/store';
import { addTaskAC } from '../../../store/rootReducer';

const CreateNewTask = () => {
  const [modal, setModal] = useState(false);
  const [modalV, setModalV] = useState(false);
  const tasks = useSelector((state) => state.root.activeProject.project.tasks);
  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState(1);

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
      const task = {
        number: tasks.queue.length + tasks.develop.length + tasks.done.length + 1,
        header,
        description,
        sDate: new Date(),
        eDate: '',
        priority,
        files: [],
        comment: {}
      };
      setHeader('');
      setDescription('');
      setPriority(1);
      store.dispatch(addTaskAC(task));
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
        Create new task
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
          <button onClick={createTask}>Create task</button>
          <div className="errorMessage">{message}</div>
        </>
      </ModalWrapper>
    </>
  );
};

export default CreateNewTask;

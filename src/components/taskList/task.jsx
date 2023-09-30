import React, { useState } from 'react';
import UpdateTask from './updateTask';

const Task = ({
  provided,
  item,
  snapshot,

  stat
}) => {
  const [activeTask, setActiveTask] = useState(undefined);
  const closeAnim = () => {
    setModalV(false);
    setTimeout(() => {
      setModal(false);
    }, 300);
    document.body.style['overflow-y'] = 'visible';
    setActiveTask(undefined);
  };
  const openAnim = (el) => {
    setModal(true);
    setTimeout(() => {
      setModalV(true);
    }, 300);
    setActiveTask(el);
    document.body.style['overflow-y'] = 'hidden';
  };

  const [modal, setModal] = useState(false);
  const [modalV, setModalV] = useState(false);
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        background: snapshot.isDragging ? 'red' : 'white',

        padding: '5px 5px',
        ...provided.draggableProps.style
      }}
      className="task">
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{ background: snapshot.isDragging ? 'red' : 'blue' }}
        key={item.id}
        className="taskInner">
        <div> header: {item.header}</div>
        <div> number: {item.number}</div>
        <div>priority: {item.priority}</div>
        <button
          onClick={() => {
            openAnim(item);
          }}
          className="updateBtn">
          Change
        </button>
      </div>

      {activeTask ? (
        <UpdateTask
          task={activeTask}
          modal={modal}
          modalV={modalV}
          closeAnim={closeAnim}
          status={stat}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Task;

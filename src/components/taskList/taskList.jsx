import React, { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from './task';
import UpdateTask from './updateTask';

const TaskList = ({ stat, openAnim, activeTask, closeAnim, modal, modalV, items }) => {
  const [status] = useState(stat);
  return (
    <Droppable key={stat} droppableId={stat}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{
            background: snapshot.isDraggingOver ? 'red' : 'white',
            minHeight: '500px',
            ...provided.droppableProps.style
          }}
          className="list">
          <h2>{stat}</h2>
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided1, snapshot1) => (
                <Task
                  key={index + stat}
                  item={item}
                  provided={provided1}
                  snapshot={snapshot1}
                  openAnim={openAnim}
                  status={stat}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}

          {activeTask ? (
            <UpdateTask
              task={activeTask}
              modal={modal}
              modalV={modalV}
              closeAnim={closeAnim}
              status={status}
            />
          ) : (
            <></>
          )}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;

import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { v4 as uuid } from 'uuid';
import Task from './task/task';
const TaskList = ({ stat, items }) => {
  return (
    <Droppable key={stat} droppableId={stat}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{
            background: snapshot.isDraggingOver ? '#dbd2a7' : '#908563',
            minHeight: '500px',
            ...provided.droppableProps.style
          }}
          className="list">
          <h2>{stat}</h2>
          {items.map((item, index) => (
            <Draggable key={'list' + uuid()} draggableId={item.header + item.id} index={index}>
              {(provided1, snapshot1) => (
                <Task
                  key={'task' + item.id}
                  item={item}
                  provided={provided1}
                  snapshot={snapshot1}
                  stat={stat}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;

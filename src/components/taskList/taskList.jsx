import React from 'react';
import { keyCreator } from '../../utils/keyCreator';

const TaskList = ({ tasks, header }) => {
  return (
    <div className="section">
      <h3>{header}</h3>
      <ul className="list">
        {tasks.map((el, index) => (
          <div className="task" key={keyCreator(index)}>
            <div> header: {el.header}</div>
            <div> number: {el.number}</div>
            <div>priority: {el.priority}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

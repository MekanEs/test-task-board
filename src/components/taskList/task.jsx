import React from 'react';

const Task = ({ provided, item, snapshot, openAnim }) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        background: snapshot.isDragging ? 'red' : 'white',
        border: '1px solid #000',
        padding: '10px',
        ...provided.draggableProps.style
      }}>
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          background: snapshot.isDragging ? 'red' : 'blue',
          margin: '10px auto',
          border: '1px solid #000',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        key={item.id}>
        <div>
          <div> header: {item.header}</div>
          <div> number: {item.number}</div>
          <div>priority: {item.priority}</div>
          <button
            onClick={() => {
              openAnim(item, status);
            }}
            className="updateBtn">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;

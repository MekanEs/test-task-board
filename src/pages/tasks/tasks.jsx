import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import store from '../../store/store';
import CreateNewTask from '../../components/modalWrapper/createNewTask/createNewTask';
import { DragDropContext } from 'react-beautiful-dnd';

import TaskList from '../../components/taskList/taskList';
import { reorderAC, updateStateAC } from '../../store/rootReducer';
import CreateNewList from '../../components/modalWrapper/createNewList/CreateNewList';

const Tasks = () => {
  const lists = useSelector((state) => state.root.activeProject.project.tasks);
  const statuses = Object.keys(lists);
  const activeProject = useSelector((state) => state.root.activeProject);

  const onDragEnd = (result, tasks) => {
    console.log(result, tasks);
    if (!result.destination) return;
    const { source, destination } = result;
    store.dispatch(
      reorderAC(source.droppableId, source.index, destination.droppableId, destination.index)
    );
  };
  const state = useSelector((state) => state);
  useEffect(() => {
    if (activeProject !== 'undefined') {
      console.log('updateState', state);
      store.dispatch(updateStateAC());
    }
  }, [activeProject]);

  return (
    <div className="TasksContainer">
      <h2>{activeProject?.name}</h2>

      {!activeProject.name || !activeProject.project.tasks ? (
        'select project'
      ) : (
        <>
          <div className="lists">
            <DragDropContext
              onDragEnd={(result) => {
                activeProject ? onDragEnd(result, activeProject.project.tasks) : () => {};
              }}>
              {statuses.map((stat, index) => {
                return (
                  <TaskList key={index} stat={stat} items={activeProject.project.tasks[stat]} />
                );
              })}
            </DragDropContext>
          </div>
          <CreateNewList />
          <CreateNewTask />
        </>
      )}
    </div>
  );
};

export default Tasks;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { setStatusAC } from '../../store/rootReducer';
import store from '../../store/store';
import CreateNewTask from '../../components/createNewTask/createNewTask';
import { DragDropContext } from 'react-beautiful-dnd';

import TaskList from '../../components/taskList/taskList';

const Tasks = () => {
  const [modal, setModal] = useState(false);
  const [modalV, setModalV] = useState(false);
  const [activeTask, setActiveTask] = useState(undefined);
  const statuses = ['queue', 'develop', 'done'];
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

  const activeProject = useSelector((state) => state.root.activeProject);

  const onDragEnd = (result, setStatusAC, tasks) => {
    console.log(result, tasks);
    if (!result.destination || result.destination.droppableId === result.source.droppableId) return;
    const { destination } = result;
    store.dispatch(
      (destination.droppableId.toLowerCase(),
      tasks.indexOf(tasks.filter((el) => el.id === result.draggableId)[0]))
    );
  };

  useEffect(() => {
    if (activeProject !== 'undefined') {
      //UpdateState
    }
  }, [activeProject]);

  return (
    <div className="TasksContainer">
      <h2>{activeProject.name}</h2>

      {!activeProject.name ? (
        'select project'
      ) : (
        <>
          <div className="lists">
            <DragDropContext
              onDragEnd={(result) => {
                onDragEnd(result, setStatusAC, activeProject.project.tasks);
              }}>
              {statuses.map((stat, ind) => (
                <TaskList
                  key={stat + ind}
                  activeTask={activeTask}
                  openAnim={openAnim}
                  closeAnim={closeAnim}
                  modal={modal}
                  modalV={modalV}
                  stat={stat}
                  items={activeProject.project.tasks[stat]}
                />
              ))}
            </DragDropContext>
          </div>

          <CreateNewTask />
        </>
      )}
    </div>
  );
};

export default Tasks;

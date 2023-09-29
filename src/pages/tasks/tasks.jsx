import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../../components/taskList/taskList';
import { setStatusAC } from '../../store/rootReducer';
import store from '../../store/store';
import CreateNewTask from '../../components/createNewTask/createNewTask';

const Tasks = () => {
  const activeProject = useSelector((state) => state.root.activeProject);

  return (
    <div className="TasksContainer">
      <h2>{activeProject.name}</h2>

      {!activeProject.name ? (
        'select project'
      ) : (
        <>
          <div className="lists">
            <TaskList
              tasks={activeProject.project.tasks.filter((el) => el.status === 'queue')}
              header="Queue"
            />
            <TaskList
              tasks={activeProject.project.tasks.filter((el) => el.status === 'develop')}
              header="Develop"
            />
            <TaskList
              tasks={activeProject.project.tasks.filter((el) => el.status === 'done')}
              header="Done"
            />
          </div>
          <button
            onClick={() => {
              store.dispatch(setStatusAC('done', 0));
            }}>
            setStatus
          </button>
          <CreateNewTask />
        </>
      )}
    </div>
  );
};

export default Tasks;

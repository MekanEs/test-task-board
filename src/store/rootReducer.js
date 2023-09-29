import { v4 as uuid } from 'uuid';

const addTaskType = 'ADDTASKTYPE';
const selectProject = 'SELECTPROJECT';
const setStatus = 'SETSTATUS';
const updateTask = 'UPDATETASK';

let initialState = {
  projects: {
    board: {
      tasks: {
        queue: [
          {
            id: uuid(),
            number: '32',
            header: 'do the dishes',
            description: 'do the dishes rigth now',
            sDate: new Date('Dec 8 2023 21:48'),
            eDate: '',
            priority: '1',
            files: [],
            comment: {
              text: 'mekan',
              comment: {
                text: 'inner',
                comment: {}
              }
            }
          }
        ],
        develop: [
          {
            id: uuid(),
            number: '1',
            header: 'do the dishes',
            description: 'do the dishes rigth now',
            sDate: new Date('Dec 8 2023 21:48'),
            eDate: '',
            priority: '1',
            files: [],
            comment: {
              text: 'mekan',
              comment: {
                text: 'inner',
                comment: {}
              }
            }
          }
        ],
        done: [
          {
            id: uuid(),
            number: '3',
            header: 'do the dishes',
            description: 'do the dishes rigth now',
            sDate: new Date('Dec 8 2023 21:48'),
            eDate: '',
            priority: '1',
            files: [],
            comment: {
              text: 'mekan',
              comment: {
                text: 'inner',
                comment: {}
              }
            }
          }
        ]
      },
      sDate: new Date('Dec 8 2023 21:48')
    },
    board2: {
      tasks: {
        queue: [
          {
            id: uuid(),
            number: '2',
            header: 'do the dishes',
            description: 'do the dishes rigth now',
            sDate: new Date('Dec 8 2023 21:48'),
            eDate: '',
            priority: '1',
            files: [],
            comment: {
              text: 'mekan',
              comment: {
                text: 'inner',
                comment: {}
              }
            }
          }
        ]
      },
      sDate: new Date('Dec 8 2023 21:48')
    }
  },
  activeProject: {}
};

const rootReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case addTaskType:
      return {
        ...state,
        activeProject: {
          ...state.activeProject,
          project: {
            ...state.activeProject.project,
            tasks: [...state.activeProject.project.tasks, action.task]
          }
        }
      };
    case updateTask:
      return {
        ...state,
        activeProject: {
          ...state.activeProject,
          project: {
            ...state.activeProject.project,
            tasks: {
              ...state.activeProject.project.tasks,
              [action.status]: [...state.activeProject.project.tasks[action.status]].map((el) =>
                el.number === action.task.number ? action.task : el
              )
            }
          }
        }
      };
    case selectProject:
      return {
        ...state,
        activeProject: { name: [action.board], project: state.projects[action.board] }
      };

    case setStatus:
      console.log(action);
      let newTask = {
        ...state.activeProject.project.tasks[action.index]
      };
      newTask.status = action.status;
      let tasks = [...state.activeProject.project.tasks];
      tasks.splice(action.index, 1, newTask);
      return {
        ...state,
        activeProject: {
          ...state.activeProject,
          project: {
            ...state.activeProject.project,
            tasks: tasks
          }
        }
      };

    default:
      return state;
  }
};

export let addTaskAC = (task) => ({ type: addTaskType, task });
export let UpdateTaskAC = (task, status) => ({ type: updateTask, task, status });
export let selectProjectAC = (board) => ({ type: selectProject, board });
export let setStatusAC = (status, index) => ({ type: setStatus, status, index });
export default rootReducer;

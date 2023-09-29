const addTaskType = 'ADDTASKTYPE';
const selectProject = 'SELECTPROJECT';
const setStatus = 'SETSTATUS';
let initialState = {
  projects: {
    board: {
      tasks: [
        {
          number: '3',
          header: 'do the dishes',
          description: 'do the dishes rigth now',
          sDate: new Date('Dec 8 2023 21:48'),
          eDate: '',
          priority: '1',
          files: [],
          status: 'queue',
          comment: {
            text: 'mekan',
            comment: {
              text: 'inner',
              comment: {}
            }
          }
        },
        {
          number: '2',
          header: 'do the laundry',
          description: 'do the dishes rigth now',
          sDate: new Date('Dec 8 2023 21:48'),
          eDate: '',
          priority: '1',
          files: '',
          status: 'develop',
          comment: {
            text: 'mekan',
            comment: {
              text: 'inner',
              comment: {}
            }
          }
        },
        {
          number: '1',
          header: 'do the laundry',
          description: 'do the dishes rigth now',
          sDate: new Date('Dec 8 2023 21:48'),
          eDate: '',
          priority: '1',
          files: '',
          status: 'done',
          comment: {
            text: 'mekan',
            comment: {
              text: 'inner',
              comment: {}
            }
          }
        }
      ],
      sDate: new Date('Dec 8 2023 21:48')
    },
    board2: {
      tasks: [
        {
          number: '1',
          header: 'do the dishes',
          description: 'do the dishes rigth now',
          sDate: 'Dec 8 2023 21:48',
          eDate: '',
          priority: '1',
          files: '',
          status: 'queue',
          comment: {
            text: 'mekan',
            comment: {
              text: 'inner',
              comment: {}
            }
          }
        },
        {
          number: '2',
          header: 'do the laundry',
          description: 'do the dishes rigth now',
          sDate: 'Dec 8 2023 21:48',
          eDate: '',
          priority: '1',
          files: '',
          status: 'develop',
          comment: {
            text: 'mekan',
            comment: {
              text: 'inner',
              comment: {}
            }
          }
        },
        {
          number: '3',
          header: 'do the laundry',
          description: 'do the dishes rigth now',
          sDate: 'Dec 8 2023 21:48',
          eDate: '',
          priority: '1',
          files: '',
          status: 'done',
          comment: {
            text: 'mekan',
            comment: {
              text: 'inner',
              comment: {}
            }
          }
        }
      ],
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
    case selectProject:
      return {
        ...state,
        activeProject: { name: [action.board], project: state.projects[action.board] }
      };
    case setStatus:
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
export let selectProjectAC = (board) => ({ type: selectProject, board });
export let setStatusAC = (status, index) => ({ type: setStatus, status, index });
export default rootReducer;

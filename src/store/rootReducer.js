import { v4 as uuid } from 'uuid';

const addTaskType = 'ADDTASKTYPE';
const selectProject = 'SELECTPROJECT';
const reorder = 'REORDER';
const updateTask = 'UPDATETASK';
const updateState = 'UPDATESTATE';
const addList = 'ADDLIST';
let initialState = JSON.parse(localStorage.getItem('test-task-jira')) || {
  projects: {
    board: {
      tasks: {
        queue: [
          {
            id: uuid(),
            number: '9',
            header: 'do the dishes1',
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
          },
          {
            id: uuid(),
            number: '20',
            header: 'do the dishes122',
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
            header: 'do the dishes2',
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
            header: 'do the dishes3',
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
          },
          {
            id: uuid(),
            number: '38',
            header: 'do the dishes38',
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
              text: ['mekan'],
              comment: {
                text: 'inner',
                comment: {}
              }
            }
          }
        ],
        develop: [],
        done: []
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
            ...state.activeProject.projects,
            tasks: {
              ...state.activeProject.project.tasks,
              queue: [...state.activeProject.project.tasks.queue, action.task]
            }
          }
        }
      };
    case updateTask:
      const newList = [...state.activeProject.project.tasks[action.status]].map((el) => {
        return el.number === action.task.number ? action.task : el;
      });

      return {
        ...state,
        activeProject: {
          ...state.activeProject,
          project: {
            ...state.activeProject.project,
            tasks: {
              ...state.activeProject.project.tasks,
              [action.status]: newList
            }
          }
        }
      };
    case selectProject:
      return {
        ...state,
        activeProject: { name: [action.board], project: state.projects[action.board] }
      };
    case reorder:
      const droppedItem = [...state.activeProject.project.tasks[action.sourceName]][
        action.sourceIndex
      ];

      let sourceList = [...state.activeProject.project.tasks[action.sourceName]].toSpliced(
        action.sourceIndex,
        1
      );

      let destList = [...state.activeProject.project.tasks[action.destName]].toSpliced(
        action.destIndex,
        0,
        droppedItem
      );
      if (action.destName === action.sourceName) {
        sourceList.splice(action.destIndex, 0, droppedItem);
        destList = sourceList;
      }
      return {
        ...state,
        activeProject: {
          ...state.activeProject,
          project: {
            ...state.activeProject.project,
            tasks: {
              ...state.activeProject.project.tasks,
              [action.sourceName]: sourceList,
              [action.destName]: destList
            }
          }
        }
      };
    case updateState:
      const projectName = state.activeProject.name;
      console.log(state.activeProject.project.tasks);
      return {
        ...state,
        projects: {
          ...state.projects,
          [projectName]: {
            tasks: { ...state.activeProject.project.tasks }
          }
        }
      };

    case addList:
      return {
        ...state,
        activeProject: {
          ...state.activeProject,
          project: {
            ...state.activeProject.project,
            tasks: {
              ...state.activeProject.project.tasks,
              [action.listName]: []
            }
          }
        }
      };
    default:
      return state;
  }
};

export let addListAC = (listName) => ({ type: addList, listName });
export let updateStateAC = () => ({ type: updateState });
export let addTaskAC = (task) => ({ type: addTaskType, task });
export let UpdateTaskAC = (task, status) => ({ type: updateTask, task, status });
export let selectProjectAC = (board) => ({ type: selectProject, board });
export let reorderAC = (sourceName, sourceIndex, destName, destIndex) => ({
  type: reorder,
  sourceName,
  sourceIndex,
  destName,
  destIndex
});
export default rootReducer;

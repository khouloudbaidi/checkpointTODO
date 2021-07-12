import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_ALL_TASKS,
  FILTER_DONE_TASKS,
  FILTER_UNDONE_TASKS,
} from "../Actions/ActionsTypes";

const initialstate = {
  listTasks: [
    { id: Math.random(), title: "Task1", isDone: false },
    { id: Math.random(), title: "Task2", isDone: false },
    { id: Math.random(), title: "Task3", isDone: false },
  ],
};

const todoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        listTasks: [...state.listTasks, action.payload],
      };

    case DELETE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.filter((task) => task.id !== action.payload),
      };

    case COMPLETE_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        listTasks: state.listTasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, title: action.payload.newTitle }
            : task
        ),
      };

    case FILTER_DONE_TASKS:
      return {
        ...state,
        listTasks: state.listTasks.filter((task) => task.isDone === true),
      };

    case FILTER_UNDONE_TASKS:
      return {
        ...state,
        listTasks: state.listTasks.filter((task) => task.isDone === false),
      };

    case FILTER_ALL_TASKS:
      return state;

    default:
      return state;
  }
};
export default todoReducer;

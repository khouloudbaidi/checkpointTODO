import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_ALL_TASKS,
  FILTER_DONE_TASKS,
  FILTER_UNDONE_TASKS,
} from "./ActionsTypes";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
export const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};
export const completeTask = (taskId) => {
  return {
    type: COMPLETE_TASK,
    payload: taskId,
  };
};
export const editTaxk = (taskId, newTitle) => {
  return {
    type: EDIT_TASK,
    payload: { taskId, newTitle },
  };
};

export const filterDoneTaks = () => {
  return {
    type: FILTER_DONE_TASKS,
  };
};

export const filterUndoneTaks = () => {
  return {
    type: FILTER_UNDONE_TASKS,
  };
};

export const filterAllTasks = () => {
  return {
    type: FILTER_ALL_TASKS,
  };
};

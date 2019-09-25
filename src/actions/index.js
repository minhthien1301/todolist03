import * as types from "./../constants/ActionTypes";
//list all
export const listRequest = () => {
  return {
    type: types.LIST_REQUEST
  };
};
export const listSuccess = tasks => {
  return {
    type: types.LIST_SUCCESS,
    tasks
  };
};
export const listErrors = () => {
  return {
    type: types.LIST_ERRORS
  };
};

//delete task
export const deleteTaskRequest = id => {
  return {
    type: types.DELETE_TASK_REQUEST,
    id
  };
};
export const deleteTaskSuccess = id => {
  return {
    type: types.DELETE_TASK_SUCCESS,
    id
  };
};
export const deleteTaskErrors = error => {
  return {
    type: types.DELETE_TASK_ERRORS,
    error
  };
};

//add task
export const addTaskRequest = task => {
  return {
    type: types.ADD_TASK_REQUEST,
    task
  };
};
export const addTaskSuccess = task => {
  return {
    type: types.ADD_TASK_SUCCESS,
    task
  };
};
export const addTaskErrors = error => {
  return {
    type: types.ADD_TASK_ERRORS,
    error
  };
};
//Toggle Form
export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  };
};

export const openForm = () => {
  return {
    type: types.OPEN_FORM
  };
};

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  };
};

export const editTask = task => {
  return {
    type: types.EDIT_TASK,
    task
  };
};

//Search task
export const searchTaskRequest = keyword => {
  return {
    type: types.SEARCH_REQUEST,
    keyword
  };
};
export const searchTaskSuccess = keyword => {
    return {
      type: types.SEARCH_SUCCESS,
      keyword
    };
  };
  export const searchTaskError = () => {
    return {
      type: types.SEARCH_ERRORS,
      
    };
  };

export const sortTask = sortValue => {
  return {
    type: types.SORT,
    sortValue
  };
};

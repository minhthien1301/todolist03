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
export const deleteTaskRequest = _id => {
  return {
    type: types.DELETE_TASK_REQUEST,
    _id
  };
};
export const deleteTaskSuccess = _id => {
  return {
    type: types.DELETE_TASK_SUCCESS,
    _id
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

//edit task
export const editTaskRequest = task => {
  return {
    type: types.EDIT_TASK_REQUEST,
    task
  };
};
export const editTaskSuccess = task => {
  return {
    type: types.EDIT_TASK_SUCCESS,
    task
  };
};
export const editTaskError = error => {
  return {
    type: types.EDIT_TASK_ERRORS,
    error
  };
};

//Update task
export const updateTaskRequest = task => {
  return {
    type: types.UPDATE_TASK_REQUEST,
    task
  };
};
export const updateTaskSuccess = task => {
  return {
    type: types.UPDATE_TASK_SUCCESS,
    task
  };
};
export const updateTaskError = task => {
  return {
    type: types.UPDATE_TASK_ERRORS,
    task
  };
};

//Search task
export const searchTaskRequest = search => {
  return {
    type: types.SEARCH_REQUEST,
    search
  };
};
export const searchTaskSuccess = search => {
    return {
      type: types.SEARCH_SUCCESS,
      search
    };
  };
  export const searchTaskError = () => {
    return {
      type: types.SEARCH_ERRORS,
      
    };
  };

//sort task
export const sortTaskError = error => {
  return {
    type: types.SORT_ERRORS,
    error: 'error'
  };
};
export const sortTaskRequest = sort => {
  return {
    type: types.SORT_REQUEST,
    sort
  };
};
export const sortTaskSuccess = sort => {
  return {
    type: types.SORT_SUCCESS,
    sort
  };
};


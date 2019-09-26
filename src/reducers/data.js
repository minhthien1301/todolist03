import * as types from "../constants/ActionTypes";

var generateID = () => {
  var randomstring = require("randomstring");
  var id = randomstring.generate();
  return id;
};

var findIndex = (tasks, id) => {
  var resulf = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      resulf = index;
    }
  });
  return resulf;
};
var initialState = {
  tasks: [],
  isDisplayForm: false,
  itemEditting: null,
  search: "",
  sort: 0
};
var data = (state = initialState, action) => {
  switch (action.type) {
    // list all
    case types.LIST_REQUEST:
      return { ...state };
    case types.LIST_SUCCESS:
      state.tasks = action.tasks;
      return { ...state };
    case types.LIST_ERRORS:
      return {};

    // Add task
    case types.ADD_TASK_SUCCESS: {
      let tasks = [...state.tasks];
      var newTask = {
        id: generateID(),
        name: action.task.name,
        status: action.task.status
      };
      tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return { ...state, tasks };
    }
    case types.ADD_TASK_ERRORS:
      return { ...state };
    case types.ADD_TASK_REQUEST:
      return { ...state };

    //delete task
    case types.DELETE_TASK_SUCCESS: {
      let index = findIndex(state.tasks, action.id);
      state = {
        ...state,
        tasks: [...state.tasks.slice(0, index), ...state.tasks.slice(index + 1)]
      };
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      return { ...state };
    }
    case types.DELETE_TASK_ERRORS: {
      return { ...state };
    }
    case types.DELETE_TASK_REQUEST: {
      return { ...state };
    }
    //toggle form
    case types.TOGGLE_FORM:
      state = { ...state, isDisplayForm: !state.isDisplayForm };
      return state;
    case types.OPEN_FORM:
      state = { ...state, isDisplayForm: true };
      return state;
    case types.CLOSE_FORM:
      state = { ...state, isDisplayForm: false };
      return state;

    //search
    case types.SEARCH_REQUEST:
      state = { ...state, search: "" };
      return { ...state };
    case types.SEARCH_SUCCESS:
      state.search = action.search;
      return { ...state };
    case types.SEARCH_ERRORS:
      state = { ...state, search: "" };
      return { ...state };

    //sort
    case types.SORT_REQUEST:
      state = { ...state, sort: 0 };
      return { ...state };
    case types.SORT_SUCCESS:
      state.sort = action.sort;
      return { ...state };
    case types.SORT_ERRORS:
      state = { ...state, sort: 0 };
      return { ...state };

    //edit task
    case types.EDIT_TASK_REQUEST:
      state = { ...state, itemEditting: null };
      return { ...state };
    case types.EDIT_TASK_SUCCESS:
      state.itemEditting = action.task;
      return { ...state };
    case types.EDIT_TASK_ERRORS:
      state = { ...state, itemEditting: null };
      return { ...state };

    //update task
    case types.UPDATE_TASK_REQUEST:
      return { ...state };
    case types.UPDATE_TASK_SUCCESS:
        let newItems = [...state.tasks];
        let index = newItems.findIndex(task => {
          return task.id === action.task.id;
        }); 
        newItems[index] = action.task;
        state = { ...state, tasks: newItems };
        localStorage.setItem("tasks", JSON.stringify(state.tasks));  
        return {...state};
    case types.UPDATE_TASK_ERRORS:
      return { ...state };
    default:
      return { ...state };
  }
};

export default data;

import * as types from "./../constants/ActionTypes";

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
var initialState = [];
var tasks = (state = initialState, action) => {
  switch (action.type) {
    // list all
    case types.LIST_REQUEST:
      return [...state];
    case types.LIST_SUCCESS:   
      state = action.tasks;
      return state;
    case types.LIST_ERRORS:
      return [...state];
    // Add task
    case types.ADD_TASK_SUCCESS: {
      var newTask = {
        id: generateID(),
        name: action.task.name,
        status: action.task.status
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    }
    case types.ADD_TASK_ERRORS:
      return [...state];
    case types.ADD_TASK_REQUEST:
      return [...state];

    //delete task
    case types.DELETE_TASK_SUCCESS: {
      let index = findIndex(state, action.id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    }
    case types.DELETE_TASK_ERRORS: {
      return [...state];
    }
    case types.DELETE_TASK_REQUEST: {
      return [...state];
    }
    default:
      return state;
  }
};
export default tasks;

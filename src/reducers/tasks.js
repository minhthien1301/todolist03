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

var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];
var tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_TASK:
      return state;

    case types.ADD_TASK: {
      if (action.task.id === "") {
        let newTask = {
          id: generateID(),
          name: action.task.name,
          status: action.task.status
        };
        state.push(newTask);
      }
      else{
        let index = findIndex(state, action.task.id);
        state[index] = action.task;
      }

      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    }

    case types.DELETE_TASK: {
      let index = findIndex(state, action.id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    }

    default:
      return state;
  }
};
export default tasks;

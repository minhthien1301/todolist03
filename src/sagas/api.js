import axios from "axios";

const url = "http://5d91a864741bd4001411645b.mockapi.io/tasks";
function listTasks() {
  return axios({
    method: "GET",
    url
  });
}

// add task
function addTaskAPI(newTask) {
  return axios({
    method: "POST",
    url,
    data: newTask
  });
}

// delete
function deleteTaskAPI(param) {
  return axios({
    method: "DELETE",
    url: `${url}/${param}`,
    data: null
  });
}

//update
function updateTaskAPI(task) {
  return axios({
    method: "PUT",
    url: `${url}/${task.id}`,
    data: task
  });
}

export const api = {
  listTasks,
  addTaskAPI,
  deleteTaskAPI,
  updateTaskAPI
};

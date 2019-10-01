import { fork, put, takeLatest } from "redux-saga/effects";
import * as types from "./../constants/ActionTypes";
import { api } from "./api";

// const data = JSON.parse(localStorage.getItem("tasks"))
//   ? JSON.parse(localStorage.getItem("tasks"))
//   : [];

//Show tasks
function* listTasks() {
  try {
    const response = yield api.listTasks();
    const data = response.data ? response.data : [];
    const tasks = [...data];
    yield put({
      type: types.LIST_SUCCESS,
      tasks
    });
  } catch (err) {
    yield put({
      type: types.LIST_ERRORS,
      err
    });
  }
}

//Delete stask
function* deleteTasks(action) {
  if (action) {
    let id = action.id;
    const response = yield api.deleteTaskAPI(id);
    yield put({
      type: types.DELETE_TASK_SUCCESS,
      id: response.data.id
    });
  } else {
    yield put({
      type: types.DELETE_TASK_ERRORS,
      err: "error"
    });
  }
}

//Add tasks
function* addTasks(action) {
  try {
    const { task } = action;
    const response = yield api.addTaskAPI(task);
    yield put({
      type: types.ADD_TASK_SUCCESS,
      task: response.data
    });
  } catch (err) {
    yield put({
      type: types.ADD_TASK_ERRORS,
      err
    });
  }
}

//edit task
function* editTasks(action) {
  try {
    yield put({
      type: types.EDIT_TASK_SUCCESS,
      task: action.task
    });
  } catch (error) {
    yield put({
      type: types.EDIT_TASK_ERRORS,
      error
    });
  }
}

//update task
function* updateTasks(action) {
  try {
    const { task } = action;
    const response = yield api.updateTaskAPI(task);
    yield put({
      type: types.UPDATE_TASK_SUCCESS,
      task: response.data
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_TASK_ERRORS,
      error
    });
  }
}

//Search
function* searchTasks(action) {
  const { search } = action;
  if (action) {
    yield put({
      type: types.SEARCH_SUCCESS,
      search
    });
  } else {
    yield put({
      type: types.SEARCH_ERRORS,
      error: "error"
    });
  }
}

//Sort
function* sortTasks(action) {
  const { sort } = action;
  if (action) {
    yield put({
      type: types.SORT_SUCCESS,
      sort
    });
  } else {
    yield put({
      type: types.SORT_ERRORS,
      error: "error"
    });
  }
}

function* watchListTasks() {
  yield takeLatest(types.LIST_REQUEST, listTasks);
}
function* deleteListTask() {
  yield takeLatest(types.DELETE_TASK_REQUEST, deleteTasks);
}
function* addTask() {
  yield takeLatest(types.ADD_TASK_REQUEST, addTasks);
}
function* editTask() {
  yield takeLatest(types.EDIT_TASK_REQUEST, editTasks);
}
function* searchtask() {
  yield takeLatest(types.SEARCH_REQUEST, searchTasks);
}
function* sortTask() {
  yield takeLatest(types.SORT_REQUEST, sortTasks);
}
function* updateTask() {
  yield takeLatest(types.UPDATE_TASK_REQUEST, updateTasks);
}
function* rootSaga() {
  yield fork(watchListTasks);
  yield fork(deleteListTask);
  yield fork(addTask);
  yield fork(editTask);
  yield fork(searchtask);
  yield fork(sortTask);
  yield fork(updateTask);
}
export default rootSaga;

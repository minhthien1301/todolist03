import { fork, put, takeLatest } from "redux-saga/effects";
import * as types from "./../constants/ActionTypes";

const data = JSON.parse(localStorage.getItem("tasks"));

//Show tasks
function* listTasks() {
  try {
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
function* deleteTasks(id) {
  if (id) {
    yield put({
      type: types.DELETE_TASK_SUCCESS,
      id: id
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
    yield put({
      type: types.ADD_TASK_SUCCESS,
      task: action.task
    });
  } catch (err) {
    yield put({
      type: types.ADD_TASK_ERRORS,
      err
    });
  }
}

//Search
function* searchTasks(action) {
  const { keyword } = action;
  if (action) {
    yield put({
      type: types.SEARCH_SUCCESS,
      keyword
    });
  } else {
    yield put({
      type: types.SEARCH_ERRORS,
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
function* searchtask() {
  yield takeLatest(types.SEARCH_REQUEST, searchTasks);
}

function* rootSaga() {
  yield fork(watchListTasks);
  yield fork(deleteListTask);
  yield fork(addTask);
  yield fork(searchtask);
}
export default rootSaga;

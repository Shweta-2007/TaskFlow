import { takeEvery, call, put } from "redux-saga/effects";
import { api } from "../utils/api";
import { addTask, deleteTask, updateTask } from "../utils/tasksSlice";

function* handleAddTask(action) {
  try {
    const task = yield call(api.addTask, action.payload);
    yield put(addTask(task));
  } catch (error) {}
}

function* handleDeleteTask(action) {
  try {
    yield call(api.deleteTask, action.payload.id);
    yield put(deleteTask(action.payload));
  } catch (error) {}
}

function* handleUpdateTask(action) {
  try {
    const updatedTask = yield call(api.updateTask, action.payload);
    yield put(updateTask(updatedTask));
  } catch (error) {}
}

function* rootSaga() {
  yield takeEvery("ADD_TASK", handleAddTask);
  yield takeEvery("DELETE_TASK", handleDeleteTask);
  yield takeEvery("UPDATE_TASK", handleUpdateTask);
}

export default rootSaga;

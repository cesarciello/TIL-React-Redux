import { all, put, takeLatest, takeEvery, select } from "redux-saga/effects";
import TodoService from "../services/TodoService";
import { TodoAction, TodoConstants } from "../actions/TodoActions";

function* listAll() {
  const todoList = yield TodoService.list();
  yield put(TodoAction.listResponse(todoList));
}

function* watchListAll() {
  yield takeLatest(TodoConstants.TODO_LIST, listAll);
}

function* create({ description }) {
  const newItem = yield TodoService.create({
    description,
    isChecked: false,
  });
  yield put(TodoAction.createResponse(newItem));
}

function* watchCreate() {
  yield takeEvery(TodoConstants.TODO_CREATE, create);
}

function* remove({ id }) {
  yield TodoService.remove(id);
}

function* watchRemove() {
  yield takeEvery(TodoConstants.TODO_REMOVE, remove);
}

function* clear() {
  const store = yield select();
  const todoList = store.TodoReducer.filter((item) => {
    if (item.isChecked) {
      TodoService.remove(item.id);
      return false;
    }
    return true;
  });
  yield put(TodoAction.listResponse(todoList));
}

function* watchClear() {
  yield takeLatest(TodoConstants.TODO_CLEAR, clear);
}

function* update({ item }) {
  yield TodoService.update(item);
}

function* watchUpdate() {
  yield takeEvery(TodoConstants.TODO_UPDATE, update);
}

export default function* TodoSaga() {
  yield all([
    watchListAll(),
    watchCreate(),
    watchRemove(),
    watchClear(),
    watchUpdate(),
  ]);
}

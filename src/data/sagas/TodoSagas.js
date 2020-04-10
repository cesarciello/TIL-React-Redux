import { all, put, takeLatest, takeEvery } from "redux-saga/effects";
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

export default function* TodoSaga() {
  yield all([watchListAll(), watchCreate()]);
}

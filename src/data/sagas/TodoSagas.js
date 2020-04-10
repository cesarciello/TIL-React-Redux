import { all, put } from 'redux-saga/effects';
import TodoService from '../services/TodoService';
import { TodoActions } from '../actions/TodoActions';

function* listAll() {
    const todoList = yield TodoService.list();

}

export default function* TodoSaga() {
    yield all([
        test()
    ])
}
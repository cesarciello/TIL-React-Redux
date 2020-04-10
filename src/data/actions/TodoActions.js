import TodoService from "../services/TodoService";

export const TodoConstants = {
  TODO_LIST: "TODO_LIST",
  TODO_LIST_RESPONSE: "TODO_LIST_RESPONSE",
  TODO_CREATE: "TODO_CREATE",
  TODO_UPDATE: "TODO_UPDATE",
  TODO_REMOVE: "TODO_REMOVE",
  TODO_CLEAR: "TODO_CLEAR",
};

export const TodoAction = {
  list() {
    return async (dispatch) => {
      const todoList = await TodoService.list();
      dispatch({
        type: TodoConstants.TODO_LIST,
        todoList,
      });
    };
  },
  create(description) {
    return async (dispatch) => {
      const newItem = await TodoService.create({
        description,
        isChecked: false,
      });
      dispatch({
        type: TodoConstants.TODO_CREATE,
        newItem,
      });
    };
  },
  update(item) {
    return async (dispatch) => {
      await TodoService.update(item)
      dispatch({
        type: TodoConstants.TODO_UPDATE,
        item,
      });
    };
  },
  remove(id) {
    return async (dispatch) => {
      await TodoService.remove(id);
      dispatch({
        type: TodoConstants.TODO_REMOVE,
        id,
      });
    };
  },
  clear() {
    return async (dispatch, getStore) => {
      getStore().TodoReducer.forEach((item) => {
        if (item.isChecked) {
          TodoService.remove(item.id);
        }
      });
      dispatch({
        type: TodoConstants.TODO_CLEAR,
      });
    };
  },
};

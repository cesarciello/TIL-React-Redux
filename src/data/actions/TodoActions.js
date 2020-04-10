import TodoService from "../services/TodoService";

export const TodoConstants = {
  TODO_LIST: "TODO_LIST",
  TODO_LIST_RESPONSE: "TODO_LIST_RESPONSE",
  TODO_CREATE: "TODO_CREATE",
  TODO_CREATE_RESPONSE: "TODO_CREATE_RESPONSE",
  TODO_UPDATE: "TODO_UPDATE",
  TODO_REMOVE: "TODO_REMOVE",
  TODO_CLEAR: "TODO_CLEAR",
};

export const TodoAction = {
  list() {
    return {
      type: TodoConstants.TODO_LIST,
    };
  },
  listResponse(todoList) {
    return {
      type: TodoConstants.TODO_LIST_RESPONSE,
      todoList,
    };
  },
  create(description) {
    return {
      type: TodoConstants.TODO_CREATE,
      description,
    };
  },
  createResponse(newItem) {
    return {
      type: TodoConstants.TODO_CREATE_RESPONSE,
      newItem,
    };
  },
  update(item) {
    return {
      type: TodoConstants.TODO_UPDATE,
      item,
    };
  },
  remove(id) {
    return {
      type: TodoConstants.TODO_REMOVE,
      id,
    };
  },
  clear() {
    return {
      type: TodoConstants.TODO_CLEAR,
    };
  },
};

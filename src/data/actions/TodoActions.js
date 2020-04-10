export const TodoConstants = {
  TODO_CREATE: "TODO_CREATE",
  TODO_UPDATE: "TODO_UPDATE",
  TODO_REMOVE: "TODO_REMOVE",
  TODO_CLEAR: "TODO_CLEAR",
};

export const TodoAction = {
  create(description) {
    return {
      type: TodoConstants.TODO_CREATE,
      description,
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

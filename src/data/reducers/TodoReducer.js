import { TodoConstants } from "../actions/TodoActions";

const TodoReducer = (todoList = [], action) => {
  switch (action.type) {
    case TodoConstants.TODO_LIST_RESPONSE:
      return action.todoList;

    case TodoConstants.TODO_CREATE_RESPONSE:
      return [
        ...todoList,
        action.newItem
      ];

    case TodoConstants.TODO_REMOVE:
      const index = todoList.findIndex((item) => item.id === action.id);
      return [...todoList.slice(0, index), ...todoList.splice(index + 1)];

    case TodoConstants.TODO_UPDATE:
      return todoList.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });

    case TodoConstants.TODO_CLEAR:
      return todoList.filter((item) => !item.isChecked);

    default:
      return todoList;
  }
};

export default TodoReducer;

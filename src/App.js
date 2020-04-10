import "./App.css";
import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import NewTodoItem from "./components/NewTodoItem";
import { useDispatch, useSelector } from "react-redux";
import { TodoAction } from "./data/actions/TodoActions";

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => store.TodoReducer);

  useEffect(() => {
    dispatch(TodoAction.list());
    console.log(`here`);
  }, [dispatch]);

  return (
    <div className="App">
      <NewTodoItem
        onAdd={(description) => dispatch(TodoAction.create(description))}
      />
      <hr />
      <button onClick={() => dispatch(TodoAction.clear())} className="tw-btn">
        Limpar
      </button>
      <hr />
      <TodoList
        onDelete={(id) => dispatch(TodoAction.remove(id))}
        onUpdate={(item) => dispatch(TodoAction.update(item))}
        items={todoList}
      />
    </div>
  );
}

export default App;

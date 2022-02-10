import { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div className="App">
      <h2>ToDo List</h2>

      {/** Add ToDos */}
      <AddTodo todo={todo} setTodo={setTodo} dispatch={dispatch} />
      {/** List ToDos  */}

      <Todos todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;

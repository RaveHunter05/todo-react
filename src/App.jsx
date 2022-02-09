import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);

  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todo.todos);

  useEffect(() => {
    setTodo(todos);
  }, []);

  return (
    <div className="App">
      <div>
        <h2>Ez todo app made with react</h2>
        <section>
          <input type="text" placeholder="New Task" />
          <button
            onClick={() =>
              dispatch({ type: "ADD_TODO", payload: { value: "hola" } })
            }
          >
            {" "}
            Add{" "}
          </button>
        </section>
        <section></section>
      </div>
    </div>
  );
}

export default App;

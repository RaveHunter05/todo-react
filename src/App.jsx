import { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import logo from "./logo.svg";
import { BsTrash } from "react-icons/bs";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div className="App">
      <h2>ToDo List</h2>

      <input
        type="text"
        placeholder="Add todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "ADD_TODO", payload: { value: todo } })}
      >
        Add Todo
      </button>

      <section>
        {todos.map((todoValue, index) => (
          <article className="todo" key={index}>
            <input
              type="checkbox"
              onChange={() =>
                dispatch({
                  type: "CHANGE_TODO",
                  payload: {
                    id: index,
                  },
                })
              }
            />
            <p
              style={{
                textDecoration: !!todoValue.completed ? "line-through" : "none",
              }}
            >
              {todoValue.value}
            </p>
            <BsTrash
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", payload: { id: index } })
              }
              disabled={index === 0 ? true : false}
            />
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;

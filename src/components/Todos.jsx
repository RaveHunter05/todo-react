import { BsTrash } from "react-icons/bs";

function Todos(props) {
  const { todos, dispatch } = props;

  return (
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
  );
}

export default Todos;

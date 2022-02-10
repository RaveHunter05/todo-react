function AddTodo(props) {
  const { todo, setTodo, dispatch } = props;

  function handleAdd() {
    dispatch({ type: "ADD_TODO", payload: { value: todo } });
    setTodo("");
  }
  return (
    <section>
      <input
        type="text"
        placeholder="Add todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </section>
  );
}

export default AddTodo;

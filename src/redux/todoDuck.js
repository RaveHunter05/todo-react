// Structure

// Constants

const initialState = {
  todos: [
    {
      id: 0,
      value: "Walk the dog",
      completed: false,
    },
  ],
  numero: 0,
};

// Actions

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const CHANGE_TODO = "CHANGE_TODO";
const ALL_TODOS = "ALL_TODOS";
const ADD_NUMBER = "ADD_NUMBER";

// Actual reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.todos[state.todos.length - 1].id + 1,
        value: action.payload.value,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case REMOVE_TODO:
      const removedTodos = [...state.todos].filter(
        (x) => x.id !== action.payload.id
      );
      return {
        ...state,
        todos: removedTodos,
      };
    case ALL_TODOS:
      return [...state];

    case CHANGE_TODO:
      let completedTodos = state.todos.map((x) => {
        return x.id === action.payload.id
          ? { ...x, completed: !x.completed }
          : x;
      });
      return {
        ...state,
        todos: completedTodos,
      };
    case ADD_NUMBER:
      return {
        ...state,
        numero: state.numero + 1,
      };
    default:
      return state;
  }
}

// Export
// by the moment i'm not doing actions because of react-redux hooks

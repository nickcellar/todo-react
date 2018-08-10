const todos = (state = [], action) => {
  let newState;
  switch (action.type) {
    case 'ADD_TODO':
      console.log("Adding todo");
      console.log("> action", action);
      console.log("> state", state);
      newState = [...state, {
        id: action.id,
        text: action.text,
        completed: false
      }];
      console.log("> newState", newState);
      return newState;
    case 'TOGGLE_TODO':
      console.log("Toggling todo");
      console.log("> action", action);
      console.log("> state", state);
      newState = state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );
      console.log("> newState", newState);
      return newState;
    default:
      return state
  }
};

export default todos

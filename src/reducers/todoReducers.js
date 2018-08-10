import {ACTION_ADD_TODO, ACTION_TOGGLE_TODO} from "../actions/todoActions";

export const todoReducers = (state = [], action) => {

  let newState;

  switch (action.type) {

    case ACTION_ADD_TODO:
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

    case ACTION_TOGGLE_TODO:
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
      console.debug("Getting initial todo");
      console.debug("> action", action);
      console.debug("> state", state);
      return state
  }
};
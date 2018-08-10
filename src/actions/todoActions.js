export const ACTION_ADD_TODO = 'ACTION_ADD_TODO';
export const ACTION_TOGGLE_TODO = 'ACTION_TOGGLE_TODO';

let nextTodoId = 0;

export const addTodoAction = text => ({
  type: ACTION_ADD_TODO,
  id: nextTodoId++,
  text
});

export const toggleTodoAction = id => ({
  type: ACTION_TOGGLE_TODO,
  id
});
import * as actions from './todoActions'

describe('todo actions', () => {
  it('addTodoAction should create ADD_TODO action', () => {
    expect(actions.addTodoAction('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  });

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  });

  it('toggleTodoAction should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodoAction(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  });
});

export const ACTION_SET_FILTER = 'ACTION_SET_FILTER';

export const Filter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const setFilter = filter => ({
  type: ACTION_SET_FILTER,
  filter
});

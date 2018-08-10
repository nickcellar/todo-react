import {ACTION_SET_FILTER, Filter} from "../actions/filterActions";

export const filterReducers = (state = Filter.SHOW_ALL, action) => {

  switch (action.type) {

    case ACTION_SET_FILTER:
      console.log("Setting filter");
      console.log("> state", state);
      console.log("> action", action);
      return action.filter;

    default:
      console.debug("Getting initial filter");
      console.debug("> action", action);
      console.debug("> state", state);
      return state
  }
};
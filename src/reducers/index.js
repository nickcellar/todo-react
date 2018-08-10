import {combineReducers} from 'redux'
import {filterReducers} from './filterReducers'
import {todoReducers} from "./todoReducers";

export const reducers = combineReducers({
  todos: todoReducers,
  filter: filterReducers
});

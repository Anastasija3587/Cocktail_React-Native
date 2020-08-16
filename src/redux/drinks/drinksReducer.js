import { combineReducers } from 'redux';
import * as types from './drinksTypes';

const drinks = (state = {}, { type, payload }) => {
  switch (type) {
    case types.GET_DRINKS:
      return payload.data;
    default:
      return state;
  }
};

const filter = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_FILTER_SUCCESS:
      return payload.data.map(el => el.strCategory);
    default:
      return state;
  }
};

const choice = (state = [], { type, payload }) => {
  switch (type) {
    case types.CHOICE:
      return [...state, payload.category];
    case types.REMOVE_CHOICE:
      return state.filter(el => el !== payload.category);
    case types.CHOICE_CLEAR:
      return [];
    default:
      return state;
  }
};

const isError = (state = null, { type, payload }) => {
  switch (type) {
    case types.GET_FILTER_ERROR:
      return payload.error;
    case types.GET_FILTER_START:
      return null;
    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case types.GET_FILTER_START:
    case types.LOADING:
      return true;
    case types.GET_FILTER_SUCCESS:
    case types.GET_FILTER_ERROR:
    case types.GET_DRINKS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  drinks,
  filter,
  choice,
  isError,
  isLoading,
});

import * as types from './drinksTypes';

export const getDrinks = data => ({
  type: types.GET_DRINKS,
  payload: {
    data,
  },
});

export const getFilterStart = () => ({
  type: types.GET_FILTER_START,
});

export const getFilterSuccess = data => ({
  type: types.GET_FILTER_SUCCESS,
  payload: {
    data,
  },
});

export const getFilterError = error => ({
  type: types.GET_FILTER_ERROR,
  payload: { error },
});

export const choice = category => ({
  type: types.CHOICE,
  payload: {
    category,
  },
});

export const removeChoice = category => ({
  type: types.REMOVE_CHOICE,
  payload: {
    category,
  },
});

export const clearChoice = (arr) => ({
  type: types.CHOICE_CLEAR,
  payload: {
    arr,
  },
});

export const loading = () => ({
  type: types.LOADING,
});

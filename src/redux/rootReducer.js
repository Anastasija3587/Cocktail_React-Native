import { combineReducers } from 'redux';
import reducer from './drinks/drinksReducer';

const rootReducer = combineReducers({
  drinks: reducer,
});

export default rootReducer;

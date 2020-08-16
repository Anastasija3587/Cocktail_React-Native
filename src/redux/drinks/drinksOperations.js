import * as actions from './drinksActions';
import * as API from '../../services/api';

export const getFilter = () => dispatch => {
  dispatch(actions.getFilterStart());
  API.fetchFilter()
    .then(data => {
      dispatch(actions.getFilterSuccess(data));
    })
    .catch(err => dispatch(actions.getFilterError(err)));
};


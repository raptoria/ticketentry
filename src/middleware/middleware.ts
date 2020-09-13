/* import match from 'conditional-expression';
import axios from 'axios';
import {types} from './reducers';

export const applyMiddleware = dispatch => action =>
  dispatch(action) ||
  match(action.type)
    .equals(types.TRIGGER_ACTION).then(() => {
      axios.get('api/v1/query')
        .then(serverResponse => dispatch({type: types.DIFFERENT_ACTION, payload: serverResponse.data.response}))
        .catch(error => console.log('hups');
    })
    .else(null); */

/* import match from 'conditional-expression';
import {Action, ActionTypes} from '../store/types';
import { Dispatch } from 'react';

export const applyMiddleware = (dispatch:Dispatch<Action>) => (action:Action) =>
  match(action.type)
    .equals(ActionTypes.submitOrder).then(() => {
      //if this were a real API, you could do a fetch here
      setTimeout(function(){ 
        dispatch({type: ActionTypes.receiveOrder, order: {}}), 2000);


    })
    .else(null);  */

/*       axios.get('api/v1/query')
        .then(serverResponse => dispatch({type: types.DIFFERENT_ACTION, payload: serverResponse.data.response}))
        .catch(error => console.log('hups'); */

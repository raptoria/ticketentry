import { Action, ActionTypes } from '../store/types';
import { Dispatch } from 'react';

let count = 0; //hack to mimic a failing API

export const applyMiddleware = (dispatch: Dispatch<Action>) => async (
  action: Action
) => {
  dispatch(action);

  switch (action.type) {
    case ActionTypes.submitOrder:
      setTimeout(() => {
        if (count < 2) {
          count++;
          dispatch({
            type: ActionTypes.receiveOrder,
            payload: action.payload,
          });
        } else {
          count = 0;
          dispatch({
            type: ActionTypes.failedOrder,
            payload: { error: 'Order time has elapsed' },
          });
        }
      }, 2000);
      break;
    default:
      return null;
  }
};

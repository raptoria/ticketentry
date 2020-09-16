import { Action, ActionTypes } from '../store/types';
import { Dispatch } from 'react';
import moment from 'moment';

let count = 0; //hack to mimic a failing API

export const applyMiddleware = (dispatch: Dispatch<Action>) => async (
  action: Action
) => {
  dispatch(action);

  switch (action.type) {
    case ActionTypes.submitOrder:
      setTimeout(() => {
        if (count < 10) {
          count++;
          dispatch({
            type: ActionTypes.receiveOrder,
            payload: {
              ...action.payload,
              timestamp: moment().format('HH:mm:ss A'),
            },
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

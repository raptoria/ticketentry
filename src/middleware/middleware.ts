import { Action, ActionTypes } from '../store/types';
import { Dispatch } from 'react';

export const applyMiddleware = (dispatch: Dispatch<Action>) => async (
  action: Action
) => {
  dispatch(action);

  switch (action.type) {
    case ActionTypes.submitOrder:
      setTimeout(
        () =>
          dispatch({
            type: ActionTypes.receiveOrder,
            payload: action.payload,
          }),
        2000
      );
      break;
    default:
      return null;
  }
};

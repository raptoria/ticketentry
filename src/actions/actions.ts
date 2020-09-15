import { ActionTypes, Action, State } from '../store/types';
import { Dispatch } from 'react';

export const submitOrder = (payload: State['order']): Action => {
  return {
    type: ActionTypes.submitOrder,
    payload,
  };
};

export const receiveOrder = (payload: State['grid']): Action => {
  return {
    type: ActionTypes.receiveOrder,
    payload,
  };
};

export const editOrder = (payload: State['order']): Action => {
  return {
    type: ActionTypes.editOrder,
    payload,
  };
};

//synonymous with bindActionCreators in mapDispatchToProps, 2nd arg of connect
export const useActions = (dispatch: Dispatch<Action>) => ({
  receiveOrder: (grid: State['grid']): void => dispatch(receiveOrder(grid)),
  submitOrder: (order: State['order']): void => dispatch(submitOrder(order)),
  editOrder: (order: State['order']): void => dispatch(editOrder(order)),
});

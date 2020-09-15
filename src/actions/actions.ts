import { ActionTypes, Action, State } from '../store/types';
import { Dispatch } from 'react';

export const submitOrder = (order: State['grid']): Action => {
  return {
    type: ActionTypes.submitOrder,
    order,
  };
};

export const receiveOrder = (order: State['grid']): Action => {
  return {
    type: ActionTypes.receiveOrder,
    order,
  };
};

export const editOrder = (order: State['order']): Action => {
  return {
    type: ActionTypes.editOrder,
    order,
  };
};

//synonymous with bindActionCreators in mapDispatchToProps, 2nd arg of connect
export const useActions = (dispatch: Dispatch<Action>) => ({
  receiveOrder: (grid: State['grid']): void => dispatch(receiveOrder(grid)),
  submitOrder: (grid: State['grid']): void => dispatch(submitOrder(grid)),
  editOrder: (order: State['order']): void => dispatch(editOrder(order)),
});

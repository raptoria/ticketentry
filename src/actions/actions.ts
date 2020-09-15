import { ActionTypes, Action, State } from '../store/types';
import { Dispatch } from 'react';

export const submitOrder = (order: State['grid']): Action => {
  return {
    type: ActionTypes.submitOrder,
    order,
  };
};

export const editOrder = (order: State['order']): Action => {
  return {
    type: ActionTypes.editOrder,
    order,
  };
};

//synonymous with bindActionCreators in mapDispatchToProps
export const useActions = (dispatch: Dispatch<Action>) => ({
  submitOrder: (grid: State['grid']): void => dispatch(submitOrder(grid)),
  editOrder: (order: State['order']): void => dispatch(editOrder(order)),
});

import { ActionTypes, Action, State } from '../store/types';
import { Dispatch } from 'react';

export const submitOrder = (order: State['order']): Action => {
  return {
    type: ActionTypes.submitOrder,
    order,
  };
};

//synonymous with bindActionCreators in mapDispatchToProps
export const useActions = (dispatch: Dispatch<Action>) => ({
  submitOrder: (order: State['order']): void => dispatch(submitOrder(order)),
});

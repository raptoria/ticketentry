import { ActionTypes, Action, State } from '../store/types';
import { Dispatch } from 'react';

export const submitOrder = (payload: State['order']): Action => {
  return {
    type: ActionTypes.submitOrder,
    payload,
  };
};

export const receiveOrder = (payload: State['order']): Action => {
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

export const filteredSymbols = (payload: State['order']): Action => {
  return {
    type: ActionTypes.filteredSymbols,
    payload,
  };
};

//synonymous with bindActionCreators in mapDispatchToProps, 2nd arg of connect
export const useActions = (dispatch: Dispatch<Action>) => ({
  filteredSymbols: (payload: State['order']): void =>
    dispatch(filteredSymbols(payload)),
  receiveOrder: (payload: State['order']): void =>
    dispatch(receiveOrder(payload)),
  submitOrder: (payload: State['order']): void =>
    dispatch(submitOrder(payload)),
  editOrder: (payload: State['order']): void => dispatch(editOrder(payload)),
});

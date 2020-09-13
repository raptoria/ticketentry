import { ActionTypes, Action, State } from '../store/types';

export const submitOrder = (order: State['order']): Action => {
  return {
    type: ActionTypes.submitOrder,
    order,
  };
};

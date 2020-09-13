import React, { useReducer, useEffect, useMemo, createContext } from 'react';
import { initialState, State, AppStateContextType } from './types';
import { reducer } from '../reducers/grid';
import { submitOrder } from '../actions/actions';

const AppStateContext = createContext<AppStateContextType>(
  {} as AppStateContextType
);

export const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log('rendering'); //removelater
  });

  //synonymous with bindActionCreators in mapDispatchToProps
  const actions = useMemo(
    () => ({
      submitOrder: (order: State['order']): void => {
        dispatch(submitOrder(order));
      },
    }),
    [dispatch]
  );

  return (
    <AppStateContext.Provider value={{ state, actions }}>
      {children}
    </AppStateContext.Provider>
  );
};

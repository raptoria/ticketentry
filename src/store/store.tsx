import React, { useReducer, useEffect, createContext } from 'react';
import { StoreContextType, State, Action } from './types';
import { gridReducer } from '../reducers/grid';
import { orderReducer } from '../reducers/order';
import { useActions } from '../actions/actions';
import { initialState } from './initialState';
//import { applyMiddleware } from '../middleware/middleware';

const combineReducers = (slices: any) => (state: State, action: Action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

export const StoreContext = createContext<StoreContextType>(
  {} as StoreContextType
);

export const StoreProvider: React.FC = ({ children }) => {
  //const rootReducer = combineReducers({ gridReducer, orderReducer });

  const [state, dispatch] = useReducer(orderReducer, initialState);
  useEffect(() => {
    console.log('rendering App'); //removelater
  });

  //const enhancedDispatch = applyMiddleware(dispatch);
  //const actions = useActions(enhancedDispatch);

  const actions = useActions(dispatch);

  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

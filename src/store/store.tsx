import React, { useReducer, useEffect, createContext } from 'react';
import { StoreContextType } from './types';
import { reducer } from '../reducers/grid';
import { useActions } from '../actions/actions';
import { initialState } from './initialState';
//import { applyMiddleware } from '../middleware/middleware';

export const StoreContext = createContext<StoreContextType>(
  {} as StoreContextType
);

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log('rendering'); //removelater
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

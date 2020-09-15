import React, { useReducer, useEffect, createContext } from 'react';
import { StoreContextType, State, Action } from './types';
import { grid } from '../reducers/grid';
import { order } from '../reducers/order';
import { useActions } from '../actions/actions';
import { initialState } from '../state/initialState';
import { applyMiddleware } from '../middleware/middleware';

const combineReducers = (slices: any) => (state: State, action: Action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

//use combineReducers just like redux so each reducer gets a slice of the state
const rootReducer = combineReducers({
  grid,
  order,
});

export const StoreContext = createContext<StoreContextType>(
  {} as StoreContextType
);

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    console.log('rendering App'); //removelater
  });

  const enhancedDispatch = applyMiddleware(dispatch);
  const actions = useActions(enhancedDispatch);

  //const actions = useActions(dispatch);

  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

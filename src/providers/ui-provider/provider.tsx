import { createContext, useReducer } from 'react';
import { uiInitialState } from './initial-state';
import { uiReducer } from './reducer';

export const UIContext = createContext(undefined);

export const UiProvider = ({ children }) => {
  const [uiState, uiDispatch] = useReducer(uiReducer, uiInitialState);

  return (
    <UIContext.Provider value={{ uiState, uiDispatch }}>
      {children}
    </UIContext.Provider>
  );
};

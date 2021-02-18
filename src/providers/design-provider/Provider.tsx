import { createContext, useReducer } from 'react';
import { designInitialState } from './initial-state';
import { designReducer } from './reducer';

export const DesignContext = createContext(undefined);

export const DesignProvider = ({ children }) => {
  const [designState, designDispatch] = useReducer(
    designReducer,
    designInitialState
  );
  return (
    <DesignContext.Provider value={{ designState, designDispatch }}>
      {children}
    </DesignContext.Provider>
  );
};

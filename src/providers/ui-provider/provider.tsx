import { createContext, useReducer } from 'react';
import { uiTypes } from './types';

export const UIContext = createContext(undefined);

const initialState = {
  drawer: {
    menu: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case uiTypes.DRAWER_MENU:
      return {
        ...state,
        drawer: {
          ...state.drawer,
          menu: !state.drawer.menu,
        },
      };

    default:
      return state;
  }
};

export const UiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};

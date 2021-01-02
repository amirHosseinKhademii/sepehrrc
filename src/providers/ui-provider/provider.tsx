import { createContext, useReducer } from 'react';
import { uiTypes } from './types';

export const UIContext = createContext(undefined);

const initialState = {
  drawer: {
    menu: false,
    sections: false,
    add: false,
    settings: false,
  },
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case uiTypes.DRAWER_MENU:
      return {
        ...state,
        drawer: {
          ...state.drawer,
          menu: !state.drawer.menu,
        },
      };
    case uiTypes.DRAWER_SECTIONS:
      return {
        ...state,
        drawer: {
          ...state.drawer,
          settings: false,
          add: false,
          sections: payload,
        },
      };
    case uiTypes.DRAWER_ADD:
      return {
        ...state,
        drawer: {
          ...state.drawer,
          sections: false,
          settings: false,
          add: payload,
        },
      };
    case uiTypes.DRAWER_SETTINGS:
      return {
        ...state,
        drawer: {
          ...state.drawer,
          sections: false,
          add: false,
          settings: payload,
        },
      };
    default:
      return state;
  }
};

export const UiProvider = ({ children }) => {
  const [uiState, uiDispatch] = useReducer(reducer, initialState);
  return (
    <UIContext.Provider value={{ uiState, uiDispatch }}>
      {children}
    </UIContext.Provider>
  );
};

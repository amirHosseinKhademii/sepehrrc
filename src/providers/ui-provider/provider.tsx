import { createContext, useReducer } from 'react';
import { uiTypes } from './types';

export const UIContext = createContext(undefined);

const uiInitialState = {
  drawer: {
    menu: false,
    sections: false,
    add: false,
    settings: false,
    style: false,
  },
  modal: {
    open: false,
    editImage: false,
  },
  container: {
    padding: 'p-20px',
  },
};

const uiReducer = (state = uiInitialState, { type, payload }) => {
  switch (type) {
    case uiTypes.DRAWER_MENU:
      return {
        ...state,
        drawer: {
          ...state.drawer,
          menu: !state.drawer.menu,
          sections: false,
          add: false,
          settings: false,
          style: false,
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
          style: false,
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
          style: false,
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
          style: false,
        },
      };
    case uiTypes.DRAWER_STYLE:
      return {
        ...state,
        drawer: {
          ...state.drawer,
          sections: false,
          add: false,
          settings: false,
          style: payload.open,
        },
      };
    case uiTypes.DRAWER_CLOSE:
      return {
        ...state,
        drawer: {
          ...state.drawer,
          sections: false,
          add: false,
          settings: false,
          style: false,
        },
      };
    case uiTypes.MODAL_TOGGLE:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: payload.open,
          editImage: payload.editImage,
        },
      };
    default:
      return state;
  }
};

export const UiProvider = ({ children }) => {
  const [uiState, uiDispatch] = useReducer(uiReducer, uiInitialState);
  return (
    <UIContext.Provider value={{ uiState, uiDispatch }}>
      {children}
    </UIContext.Provider>
  );
};

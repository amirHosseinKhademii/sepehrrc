import { uiInitialState } from './initial-state';
import { uiTypes } from './types';

export const uiReducer = (state = uiInitialState, { type, payload }) => {
  switch (type) {
    case uiTypes.TOGGLE_DRAWER:
      return {
        ...state,
        drawer: {
          type: payload.type,
          open: payload.open,
        },
      };
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
          sections: !state.drawer.sections,
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
          add: !state.drawer.add,
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
          settings: !state.drawer.settings,
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
          isBackground: payload.isBackground,
        },
      };
    default:
      return state;
  }
};

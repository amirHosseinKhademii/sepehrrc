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
    case uiTypes.MODAL_TOGGLE:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: payload.open,
          editImage: payload.editImage,
          isBackground: payload.isBackground,
          type: payload.type,
          number: payload.number,
          target: payload.target,
        },
      };
    case uiTypes.TOGGLE_SETTING_STATE:
      return {
        ...state,
        setting: {
          type: payload.type,
          open: payload.open,
          number: payload.number,
        },
      };
    default:
      return state;
  }
};

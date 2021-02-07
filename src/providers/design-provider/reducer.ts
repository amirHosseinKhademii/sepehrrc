import { designInitialState } from './initial-state';
import { clone } from 'ramda';
import { designTypes } from './types';
import { applyDrag } from 'utils';
import { v4 as uuidv4 } from 'uuid';

export const designReducer = (
  state = designInitialState,
  { type, payload }
) => {
  let clonePage = clone(state.pageItems);
  let cloneCurrent = clone(state.current);
  let cloneItem = clonePage.find((item) => item.uuid === state.current.uuid);
  switch (type) {
    case designTypes.ON_HORIZONTAL_DROP:
      const uuid = uuidv4();
      return {
        ...state,
        pageItems: applyDrag(state.pageItems, payload, uuid),
        current: { ...payload.payload, uuid },
      };
    case designTypes.ON_VERTICAL_DROP:
      return {
        ...state,
        pageItems: applyDrag(state.pageItems, payload, payload.uuid),
      };
    case designTypes.ON_CHANGE_PAGE_Settings:
      return {
        ...state,
        pageSettings: { ...state.pageSettings, [payload.key]: payload.value },
      };
    case designTypes.ON_DELETE_ITEM:
      return {
        ...state,
        pageItems: clonePage.filter((item) => item.uuid != payload.uuid),
      };
    case designTypes.ON_SETTING_CLICK:
      return {
        ...state,
        current: { ...state.current, ...payload },
      };
    case designTypes.ON_SET_ITEM_SETTING:
      cloneItem.settings = cloneItem.settings
        ? { ...cloneItem.settings, ...payload }
        : { ...payload };
      cloneCurrent.settings = { ...cloneCurrent.settings, ...payload };
      return {
        ...state,
        pageItems: clonePage,
        current: cloneCurrent,
      };
    case designTypes.ON_SET_ITEM_PROPS:
      cloneItem[payload.key] = payload.value;
      cloneCurrent[payload.key] = payload.value;
      return {
        ...state,
        pageItems: clonePage,
        current: cloneCurrent,
      };
    case designTypes.ON_SET_BUTTON_PROPS:
      if (cloneCurrent.settings?.button) {
        cloneItem.settings.button[payload.key] = payload.value;
        cloneCurrent.settings.button[payload.key] = payload.value;
      } else {
        cloneItem.settings = {
          ...cloneItem.settings,
          button: { [payload.key]: payload.value },
        };
        cloneCurrent.settings = {
          ...cloneCurrent.settings,
          button: { [payload.key]: payload.value },
        };
      }
      return {
        ...state,
        pageItems: clonePage,
        current: cloneCurrent,
      };
    case designTypes.ON_SET_PURE_IMAGE:
      return {
        ...state,
        pureImage: {
          number: payload.number,
          value: payload.value,
          newTab: payload.newTab,
          link: payload.link,
          onUpload: payload.onUpload,
          description: payload.description,
          title: payload.title,
          isBackground: payload.isBackground,
        },
      };
    case designTypes.ON_SET_ITEM_IMAGES:
      cloneItem.images = [
        ...cloneItem.images.filter(
          (item) => item.number !== state.pureImage.number
        ),
        {
          ...cloneItem.images.find(
            (item) => item.number == state.pureImage.number
          ),
          number: state.pureImage.number,
          ...payload,
        },
      ];
      cloneCurrent.images = [
        ...cloneCurrent.images.filter(
          (item) => item.number !== state.pureImage.number
        ),
        {
          ...cloneCurrent.images.find(
            (item) => item.number == state.pureImage.number
          ),
          number: state.pureImage.number,
          ...payload,
        },
      ];
      return {
        ...state,
        pageItems: clonePage,
        current: cloneCurrent,
      };

    case designTypes.ON_CLEAR_CURRENT:
      return {
        ...state,
        current: {
          uuid: '',
          images: [{ number: 'one', value: '', newTab: false, link: '' }],
          settings: {},
        },
        pureImage: {
          number: '',
          value: '',
          newTab: false,
          link: '',
          onUpload: false,
          title: '',
          description: '',
          isBackground: false,
        },
      };
    case designTypes.ON_DELETE_ITEM_IMAGE:
      cloneItem.images = cloneItem.images.filter(
        (item) => item.number !== payload
      );
      cloneCurrent.images = cloneCurrent.images.filter(
        (item) => item.number !== payload
      );
      return {
        ...state,
        pageItems: clonePage,
        current: cloneCurrent,
      };
    default:
      return state;
  }
};

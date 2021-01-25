import { designInitialState } from './initial-state';
import { clone } from 'ramda';
import { designTypes } from './types';
import { applyDrag } from 'utils';

export const designReducer = (
  state = designInitialState,
  { type, payload }
) => {
  let clonePage = clone(state.pageItems);
  let cloneCurrent = clone(state.current);
  let pageCurrent = clonePage.find((item) => item.uuid === state.current.uuid);
  switch (type) {
    case designTypes.ON_HORIZONTAL_DROP:
      return {
        ...state,
        pageItems: applyDrag(state.pageItems, payload),
      };
    case designTypes.ON_VERTICAL_DROP:
      return {
        ...state,
        pageItems: applyDrag(state.pageItems, payload),
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
        current: { ...state.current, ...payload.current },
      };
    case designTypes.ON_SET_ITEM_SETTING:
      pageCurrent.settings = pageCurrent.settings
        ? { ...pageCurrent.settings, ...payload }
        : { ...payload };
      cloneCurrent.settings = { ...cloneCurrent.settings, ...payload };
      return {
        ...state,
        pageItems: clonePage,
        current: cloneCurrent,
      };
    case designTypes.ON_SET_ITEM_PROPS:
      pageCurrent[payload.key] = payload.value;
      cloneCurrent[payload.key] = payload.value;
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
        },
      };
    case designTypes.ON_SET_ITEM_IMAGES:
      pageCurrent.images = [
        ...pageCurrent.images.filter(
          (item) => item.number !== state.pureImage.number
        ),
        {
          ...pageCurrent.images.find(
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
    default:
      return state;
  }
};

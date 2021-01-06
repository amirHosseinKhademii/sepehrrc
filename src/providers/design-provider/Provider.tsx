import { createContext, useReducer } from 'react';
import { designTypes } from './types';
import { applyDrag } from 'utils';

export const DesignContext = createContext(undefined);

const initialState = {
  menu: [
    {
      id: '0',
      type: 'slider',
      title: 'اسلایدر',
    },
    {
      id: '1',
      type: 'products',
      title: 'لیست محصولات',
      items: [
        {
          id: 0,
          name: 'کیت کلاچ میتسوبیشی لنسر',
          cover: '/assets/images/product.png',
          price: '3/000/000',
          discount: '500000',
        },
        {
          id: 1,
          name: 'کیت کلاچ میتسوبیشی لنسر',
          cover: '/assets/images/product.png',
          price: '3/000/000',
          discount: '500000',
        },
        {
          id: 2,
          name: 'کیت کلاچ میتسوبیشی لنسر',
          cover: '/assets/images/product.png',
          price: '3/000/000',
          discount: '500000',
        },
        {
          id: 3,
          name: 'کیت کلاچ میتسوبیشی لنسر',
          cover: '/assets/images/product.png',
          price: '3/000/000',
          discount: '500000',
        },
      ],
    },
    {
      id: '2',
      type: 'banner',
      title: 'بنر',
    },

    {
      id: '3',
      type: 'slider',
      title: 'برندها',
    },
    {
      id: '4',
      type: 'slider',
      title: 'لیست اخبار',
    },
    {
      id: '5',
      type: 'slider',
      title: 'متن با تصویر',
    },
    {
      id: '6',
      type: 'slider',
      title: 'نظرات مشتریان',
    },
    {
      id: '7',
      type: 'text',
      title: 'متن',
    },
    {
      id: '8',
      type: 'slider',
      title: 'لیست محصولات',
    },
  ],
  page: [],
  current: { id: '', type: '', title: '', uuid: '' },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case designTypes.ON_HORIZONTAL_DROP:
      return {
        ...state,
        page: applyDrag(state.page, payload),
      };
    case designTypes.ON_VERTICAL_DROP:
      return {
        ...state,
        page: applyDrag(state.page, payload),
      };
    case designTypes.ON_DELETE_ITEM:
      return {
        ...state,
        page: [...state.page].filter((item) => item.uuid != payload.uuid),
      };
    case designTypes.ON_SETTING_CLICK:
      return {
        ...state,
        current: payload.current,
      };
    case designTypes.ON_SET_ITEM_SETTING:
      const pageSetting = [...state.page];
      let itemSetting = pageSetting.find(
        (item) => item.uuid === state.current.uuid
      );
      itemSetting.style = payload;
      return {
        ...state,
        page: pageSetting,
      };
    default:
      return state;
  }
};

export const DesignProvider = ({ children }) => {
  const [designState, designDispatch] = useReducer(reducer, initialState);

  return (
    <DesignContext.Provider value={{ designState, designDispatch }}>
      {children}
    </DesignContext.Provider>
  );
};

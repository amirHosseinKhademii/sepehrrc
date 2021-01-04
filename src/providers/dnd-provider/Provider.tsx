import { createContext, useReducer } from 'react';
import { dndTypes } from './types';
import { applyDrag } from 'utils';

export const DndContext = createContext(undefined);

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
      type: 'text',
      title: 'متن',
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
      type: 'slider',
      title: 'اسلایدر',
    },
    {
      id: '8',
      type: 'slider',
      title: 'لیست محصولات',
    },
  ],
  page: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case dndTypes.ON_HORIZONTAL_DROP:
      return {
        ...state,
        page: applyDrag(state.page, payload),
      };
    case dndTypes.ON_VERTICAL_DROP:
      return {
        ...state,
        page: applyDrag(state.page, payload),
      };
    case dndTypes.ON_DELETE_ITEM:
      return {
        ...state,
        page: [...state.page].filter((item) => item.uuid != payload.uuid),
      };
    default:
      return state;
  }
};

export const DndProvider = ({ children }) => {
  const [dndState, dndDispatch] = useReducer(reducer, initialState);

  return (
    <DndContext.Provider value={{ dndDispatch, dndState }}>
      {children}
    </DndContext.Provider>
  );
};

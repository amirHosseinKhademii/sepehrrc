import { createContext, useReducer } from 'react';
import { dndTypes } from './types';

export const DndContext = createContext(undefined);

const initialState = {
  menu: [
    {
      id: '0',
      type: 'slider',
      title: 'اسلایدر',
      icon: 'ICSlider',
    },
    {
      id: '1',
      type: 'products',
      title: 'لیست محصولات',
      icon: 'ICSlider',
    },
    {
      id: '2',
      type: 'slider',
      title: 'اسلایدر',
      icon: 'ICSlider',
    },
    {
      id: '3',
      type: 'slider',
      title: 'اسلایدر',
      icon: 'ICSlider',
    },
    {
      id: '4',
      type: 'slider',
      title: 'اسلایدر',
      icon: 'ICSlider',
    },
    {
      id: '5',
      type: 'slider',
      title: 'اسلایدر',
      icon: 'ICSlider',
    },
    {
      id: '6',
      type: 'slider',
      title: 'اسلایدر',
      icon: 'ICSlider',
    },
    {
      id: '7',
      type: 'slider',
      title: 'اسلایدر',
      icon: 'ICSlider',
    },
    {
      id: '8',
      type: 'slider',
      title: 'اسلایدر',
      icon: 'ICSlider',
    },
  ],
  page: [
    {
      id: '0',
      type: 'header',
      title: 'تست',
      icon: 'ICSlider',
      order: 0,
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case dndTypes.ON_DROP:
      let pageClone = [...state.page];
      let pageMutated = pageClone.map((item) =>
        item.order >= payload.addedIndex
          ? { ...item, order: item.order + 1 }
          : item
      );
      return {
        ...state,
        page: [
          ...pageMutated,
          { ...payload.payload, order: payload.addedIndex },
        ],
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

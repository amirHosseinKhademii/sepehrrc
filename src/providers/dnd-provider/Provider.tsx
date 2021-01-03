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
      title: 'هدر',
      icon: 'ICSlider',
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case dndTypes.ON_DRAG:
      console.log(payload);

      return {
        ...state,
        page: [...state.page, payload.payload],
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

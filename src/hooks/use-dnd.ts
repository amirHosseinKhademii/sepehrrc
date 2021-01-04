import { DndContext, dndTypes } from 'providers/dnd-provider';
import { useContext } from 'react';

export const useDnd = () => {
  const { dndDispatch, dndState } = useContext(DndContext);

  return {
    onDrop: (dropResult) => {
      dndDispatch({ type: dndTypes.ON_DROP, payload: dropResult });
    },
    setChildPayload: (index, items) => {
      return items.filter((_item, i) => i === index)[0];
    },
    dndState,
  };
};

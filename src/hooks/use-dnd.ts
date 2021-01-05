import { DndContext, dndTypes } from 'providers/dnd-provider';
import { useContext } from 'react';

export const useDnd = () => {
  const { dndDispatch, dndState } = useContext(DndContext);

  return {
    onInject: (arr, dragResult) => {
      const { removedIndex, addedIndex, payload } = dragResult;
      if (removedIndex === null && addedIndex === null) return arr;

      const result = [...arr];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }

      return result;
    },
    onHorizontalDrop: (drop) => (dropResult) => {
      if (drop.willAcceptDrop && drop.payload === dropResult.payload)
        dndDispatch({ type: dndTypes.ON_HORIZONTAL_DROP, payload: dropResult });
    },
    onVerticalDrop: (dr) => {
      dndDispatch({ type: dndTypes.ON_VERTICAL_DROP, payload: dr });
    },
    onDeleteItem: (payload) => {
      dndDispatch({ type: dndTypes.ON_DELETE_ITEM, payload });
    },
    setChildPayload: (index, items) => {
      return items.filter((_item, i) => i === index)[0];
    },
    dndState,
  };
};

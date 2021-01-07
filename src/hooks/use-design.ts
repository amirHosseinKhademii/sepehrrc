import { DesignContext, designTypes } from 'providers/design-provider';
import { useContext } from 'react';

export const useDesign = () => {
  const { designDispatch, designState } = useContext(DesignContext);

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
        designDispatch({
          type: designTypes.ON_HORIZONTAL_DROP,
          payload: dropResult,
        });
    },
    onVerticalDrop: (dr) => {
      designDispatch({ type: designTypes.ON_VERTICAL_DROP, payload: dr });
    },
    onDeleteItem: (payload) => {
      designDispatch({ type: designTypes.ON_DELETE_ITEM, payload });
    },
    setChildPayload: (index, items) => {
      return items.filter((_item, i) => i === index)[0];
    },
    onSetItemSetting: (payload) => {
      designDispatch({
        type: designTypes.ON_SET_ITEM_SETTING,
        payload,
      });
    },
    designState,
  };
};

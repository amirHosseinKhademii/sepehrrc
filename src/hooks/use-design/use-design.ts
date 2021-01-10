import { useContext } from 'react';
import { useService, useUi } from 'hooks';
import { DesignContext, designTypes } from 'providers/design-provider';

export const useDesign = () => {
  const { designDispatch, designState } = useContext(DesignContext);
  const { toggleModal } = useUi();
  const { upload } = useService();

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
    onVerticalDrop: (payload) => {
      designDispatch({ type: designTypes.ON_VERTICAL_DROP, payload });
    },
    onDeleteItem: (payload) => {
      designDispatch({ type: designTypes.ON_DELETE_ITEM, payload });
    },
    setChildPayload: (index, items) => {
      return items.filter((_item, i) => i === index)[0];
    },
    setSetting: (payload) => {
      designDispatch({
        type: designTypes.ON_SET_ITEM_SETTING,
        payload,
      });
    },
    setProps: (payload) => {
      designDispatch({
        type: designTypes.ON_SET_ITEM_PROPS,
        payload,
      });
    },
    setPureImage: async (file, number) => {
      const result = await upload(file);
      designDispatch({
        type: designTypes.ON_SET_PURE_IMAGE,
        payload: { value: result.data.secure_url, number },
      });
      toggleModal(true);
    },
    setImage: (payload) => {
      designDispatch({
        type: designTypes.ON_SET_ITEM_IMAGES,
        payload,
      });
      toggleModal(false);
    },
    designState,
  };
};

import { useContext } from 'react';
import { useService, useUi } from 'hooks';
import { DesignContext, designTypes } from 'providers/design-provider';

export const useDesign = () => {
  const { designDispatch, designState } = useContext(DesignContext);
  const { upload } = useService();
  const { toggleModal } = useUi();

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
    onPageKey: (payload) => {
      designDispatch({ type: designTypes.ON_CHANGE_PAGE_KEY, payload });
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
    setPureImage: (props: {
      value?: any;
      number?: any;
      newTab?: boolean;
      link?: string;
      onUpload?: boolean;
      description?: string;
      title?: string;
    }) => {
      const {
        value,
        number,
        newTab,
        link,
        onUpload,
        description,
        title,
      } = props;
      designDispatch({
        type: designTypes.ON_SET_PURE_IMAGE,
        payload: {
          value: value ? value : designState.pureImage.value,
          number: number !== undefined ? number : designState.pureImage.number,
          newTab: newTab !== undefined ? newTab : designState.pureImage.newTab,
          link: link ? link : designState.pureImage.link,
          onUpload:
            onUpload !== undefined ? onUpload : designState.pureImage.onUpload,
          description: description
            ? description
            : designState.pureImage.description,
          title: title ? title : designState.pureImage.title,
        },
      });
      if (value) toggleModal({ open: true });
    },
    setImage: async (payload) => {
      const result = await upload(payload);
      designDispatch({
        type: designTypes.ON_SET_ITEM_IMAGES,
        payload: result.data.secure_url,
      });
      toggleModal({ open: false });
    },
    designState,
  };
};

import { useCallback, useContext, useMemo } from 'react';
import { useService, useUi } from 'hooks';
import { DesignContext, designTypes } from 'providers/design-provider';
import { UIContext, uiTypes } from 'providers/ui-provider';

export const useDesign = () => {
  const { designDispatch, designState } = useContext(DesignContext);
  const { uiDispatch } = useContext(UIContext);
  const { upload } = useService();
  const { toggleModal } = useUi();

  return {
    onHorizontalDrop: (drop) => (dropResult) => {
      if (drop.willAcceptDrop && drop.payload === dropResult.payload)
        designDispatch({
          type: designTypes.ON_HORIZONTAL_DROP,
          payload: dropResult,
        });
      uiDispatch({
        type: uiTypes.TOGGLE_DRAWER,
        payload: { type: 'style', open: true },
      });
    },
    onVerticalDrop: (payload) => {
      designDispatch({ type: designTypes.ON_VERTICAL_DROP, payload });
    },
    onPageSetting: (payload) => {
      designDispatch({ type: designTypes.ON_CHANGE_PAGE_Settings, payload });
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
    setButtonProps: (payload) => {
      designDispatch({
        type: designTypes.ON_SET_BUTTON_PROPS,
        payload,
      });
    },
    setPureImage: (props: {
      value?: any;
      number?: any;
      onUpload?: boolean;
      isBackground?: boolean;
    }) => {
      const { value, number, onUpload, isBackground } = props;
      designDispatch({
        type: designTypes.ON_SET_PURE_IMAGE,
        payload: {
          value: value ? value : designState.pureImage.value,
          number: number !== undefined ? number : designState.pureImage.number,
          onUpload:
            onUpload !== undefined ? onUpload : designState.pureImage.onUpload,
          isBackground:
            isBackground !== undefined
              ? isBackground
              : designState.pureImage.isBackground,
        },
      });
      if (value) toggleModal({ open: true, type: 'image' });
    },
    setImage: async ({ key, payload }) => {
      const result =
        key == 'value' || key === 'backgroundImage'
          ? await upload(payload)
          : { data: { secure_url: '' } };
      if (key == 'backgroundImage') {
        designDispatch({
          type: designTypes.ON_SET_ITEM_SETTING,
          payload: { [key]: result.data.secure_url },
        });
      } else
        designDispatch({
          type: designTypes.ON_SET_ITEM_IMAGES,
          payload: {
            [key]: key === 'value' ? result.data.secure_url : payload,
          },
        });
      designDispatch({
        type: designTypes.ON_SET_PURE_IMAGE,
        payload: {
          value: '',
          number: '',
          isBackground: false,
        },
      });
      toggleModal({ open: false, type: '' });
    },
    clearCurrent: useCallback(() => {
      designDispatch({ type: designTypes.ON_CLEAR_CURRENT });
    }, []),
    deleteImage: useCallback(
      (payload) => {
        designDispatch({ type: designTypes.ON_DELETE_ITEM_IMAGE, payload });
      },
      [designState.current]
    ),
    setImageSetting: useCallback((payload) => {
      designDispatch({ type: designTypes.ON_SET_IMAGE_SETTING, payload });
    }, []),
    designState: useMemo(() => designState, [designState]),
  };
};

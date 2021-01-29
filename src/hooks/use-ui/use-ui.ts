import { DesignContext, designTypes } from 'providers/design-provider';
import { UIContext, uiTypes } from 'providers/ui-provider';
import { useCallback, useContext, useMemo } from 'react';

export const useUi = () => {
  const { uiState, uiDispatch } = useContext(UIContext);
  const { designDispatch } = useContext(DesignContext);

  return {
    toggleDrawer: useCallback(
      (props: { type?: string; open?: boolean }) => {
        const { type, open } = props;
        uiDispatch({
          type: uiTypes.TOGGLE_DRAWER,
          payload: { type, open: open ? open : !uiState.drawer.open },
        });
      },
      [uiState.drawer]
    ),
    toggleStyleDrawer: (type, current) => {
      uiDispatch({
        type: uiTypes.TOGGLE_DRAWER,
        payload: { type, open: true },
      });
      designDispatch({ type: designTypes.ON_SETTING_CLICK, payload: current });
    },
    toggleModal: (payload) => {
      uiDispatch({ type: uiTypes.MODAL_TOGGLE, payload });
    },
    toggleSettingState: useCallback(
      (payload) => {
        uiDispatch({ type: uiTypes.TOGGLE_SETTING_STATE, payload });
      },
      [uiState.setting]
    ),
    uiState: useMemo(() => uiState, [uiState]),
    uiTypes,
  };
};

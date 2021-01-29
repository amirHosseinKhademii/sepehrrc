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
    toggleMenu: () => {
      uiDispatch({ type: uiTypes.DRAWER_MENU });
      uiDispatch({ type: uiTypes.DRAWER_CLOSE });
    },
    toggleSectionsDrawer: () => {
      uiDispatch({ type: uiTypes.DRAWER_SECTIONS });
    },
    toggleAddDrawer: () => {
      uiDispatch({ type: uiTypes.DRAWER_ADD });
    },
    toggleSettingsDrawer: () => {
      uiDispatch({ type: uiTypes.DRAWER_SETTINGS });
    },
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
    uiState: useMemo(() => uiState, [uiState]),
    uiTypes,
  };
};

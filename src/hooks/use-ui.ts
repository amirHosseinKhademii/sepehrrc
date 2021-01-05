import { UIContext, uiTypes } from 'providers/ui-provider';
import { useContext } from 'react';

export const useUi = () => {
  const { uiState, uiDispatch } = useContext(UIContext);

  return {
    toggleMenu: () => {
      uiDispatch({ type: uiTypes.DRAWER_MENU });
      uiDispatch({ type: uiTypes.DRAWER_CLOSE });
    },
    toggleSectionsDrawer: (payload) => {
      uiDispatch({ type: uiTypes.DRAWER_SECTIONS, payload });
    },
    toggleAddDrawer: (payload) => {
      uiDispatch({ type: uiTypes.DRAWER_ADD, payload });
    },
    toggleSettingsDrawer: (payload) => {
      uiDispatch({ type: uiTypes.DRAWER_SETTINGS, payload });
    },
    uiState,
  };
};
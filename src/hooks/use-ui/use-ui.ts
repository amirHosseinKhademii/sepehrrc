import { DesignContext, designTypes } from 'providers/design-provider';
import { UIContext, uiTypes } from 'providers/ui-provider';
import { useContext } from 'react';

export const useUi = () => {
  const { uiState, uiDispatch } = useContext(UIContext);
  const { designDispatch } = useContext(DesignContext);

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
    toggleStyleDrawer: (payload) => {
      uiDispatch({ type: uiTypes.DRAWER_STYLE, payload });
      designDispatch({ type: designTypes.ON_SETTING_CLICK, payload });
    },
    toggleModal: (payload) => {
      uiDispatch({ type: uiTypes.MODAL_TOGGLE, payload });
    },
    uiState,
    uiTypes,
  };
};

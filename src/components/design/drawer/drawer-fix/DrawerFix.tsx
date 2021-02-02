import { useClass, useUi, useDesign } from 'hooks';
import { Fragment } from 'react';
import {
  AddButton,
  BackButton,
  MenuButton,
  SectionButton,
  SettingButton,
  LogoButton,
} from './dependencies';

export const DrawerFix = () => {
  const { toggle } = useClass();
  const { uiState, toggleDrawer, toggleSettingState } = useUi();
  const { clearCurrent } = useDesign();
  const { drawer } = uiState;
  const { designState } = useDesign();
  const { direction } = designState.pageSettings;

  const handleClickBackButton = () => {
    if (uiState.setting.open && uiState.setting.type === 'picture') {
      toggleDrawer({ type: 'style', open: true });
      toggleSettingState({ type: '', open: false });
    } else {
      toggleDrawer({ type: 'sections', open: true });
      clearCurrent();
    }
  };

  return (
    <div
      className={`w-68px h-full fixed   ${
        direction === 'rtl' ? 'right-0' : 'left-0'
      } top-0 bg-gray_shade-800 flex flex-col items-center z-50`}
    >
      {drawer.open && drawer.type === 'style' ? (
        <BackButton handleClickBackButton={handleClickBackButton} />
      ) : (
        <Fragment>
          <MenuButton drawer={drawer} toggleDrawer={toggleDrawer} />
          <SectionButton
            drawer={drawer}
            toggle={toggle}
            toggleDrawer={toggleDrawer}
          />
          <AddButton
            drawer={drawer}
            toggle={toggle}
            toggleDrawer={toggleDrawer}
          />
          <SettingButton
            drawer={drawer}
            toggle={toggle}
            toggleDrawer={toggleDrawer}
          />
        </Fragment>
      )}
      <LogoButton />
    </div>
  );
};

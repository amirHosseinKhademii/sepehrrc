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
  const { uiState, toggleDrawer } = useUi();
  const { designState, setSetting } = useDesign();
  const { drawer } = uiState;

  const handleClickBackButton = () => {
    toggleDrawer({ type: 'sections', open: true });
    if (designState.current.type === 'slider')
      setSetting({ imageSetting: false });
  };

  return (
    <div className="w-68px h-full fixed right-0 top-0 bg-gray_shade-800 flex flex-col items-center z-50">
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

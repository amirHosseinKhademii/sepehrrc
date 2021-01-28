import { FC, Fragment } from 'react';
import { useUi } from 'hooks';
import { IDrawer } from './interfaces';
import {
  StyleDashboard,
  AddDashboard,
  SectionsDashboard,
  SettingsDashboard,
} from 'components';

export const DrawerDynamic: FC<IDrawer> = () => {
  const { uiState } = useUi();

  return (
    <Fragment>
      {uiState.drawer.sections && <SectionsDashboard />}
      {uiState.drawer.add && <AddDashboard />}
      {uiState.drawer.settings && <SettingsDashboard />}
      {uiState.drawer.style && <StyleDashboard />}
    </Fragment>
  );
};

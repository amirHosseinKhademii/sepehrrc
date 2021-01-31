import { FC } from 'react';
import { useUi } from 'hooks';
import {
  StyleDashboard,
  AddDashboard,
  SectionsDashboard,
  SettingsDashboard,
} from 'components';

export const DrawerDynamic: FC<IDrawer> = () => {
  const { uiState } = useUi();

  if (uiState.drawer.open)
    switch (uiState.drawer.type) {
      case 'sections':
        return <SectionsDashboard />;
      case 'add':
        return <AddDashboard />;
      case 'settings':
        return <SettingsDashboard />;
      case 'style':
        return <StyleDashboard />;
      default:
        return null;
    }
  else return null;
};

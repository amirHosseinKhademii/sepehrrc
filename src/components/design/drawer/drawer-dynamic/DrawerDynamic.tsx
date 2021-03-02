import { FC } from 'react';
import { useUi } from 'hooks';
import dynamic from 'next/dynamic';
import { DrawerLayout } from 'components';

const SectionsDashboard = dynamic(
  () =>
    import(
      'components/design/dashboards/sections-dashboard/sections-dashboard'
    ),
  { loading: () => <DrawerLayout /> }
);
const AddDashboard = dynamic(
  () => import('components/design/dashboards/add-dashboard/add-dashboard'),
  { loading: () => <DrawerLayout /> }
);
const SettingsDashboard = dynamic(
  () =>
    import(
      'components/design/dashboards/settings-dashboard/settings-dashboard'
    ),
  { loading: () => <DrawerLayout /> }
);
const StyleDashboard = dynamic(
  () => import('components/design/dashboards/StyleDashboard'),
  { loading: () => <DrawerLayout /> }
);

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

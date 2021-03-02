import { DrawerLayout } from 'components';
import { useDesign, useDirection } from 'hooks';
import { HeaderDrawer } from '../common';
import { BaseSettings } from './dependencies';

const Dashboard = () => {
  const { setSetting, designState } = useDesign();
  const { settings } = designState.current;
  const { language } = useDirection();
  return (
    <DrawerLayout>
      <HeaderDrawer setting text={language.BDBlogShowSettings} />
      <BaseSettings settings={settings} setSetting={setSetting} />
    </DrawerLayout>
  );
};

export default Dashboard;

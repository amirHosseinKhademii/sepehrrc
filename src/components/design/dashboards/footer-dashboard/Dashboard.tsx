import { DrawerLayout } from 'components';
import { useDesign } from 'hooks';
import { HeaderDrawer } from '../common';
import BaseSettings from './dependencies/base-setting';

const Dashboard = () => {
  const { setSetting, designState } = useDesign();
  const { settings } = designState.current;

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات فوتر" />
      <BaseSettings setSetting={setSetting} settings={settings} />
    </DrawerLayout>
  );
};

export default Dashboard;

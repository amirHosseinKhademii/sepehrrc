import { DrawerLayout } from 'components';
import { useDesign } from 'hooks';
import { HeaderDrawer } from '../common';
import { BaseSettings } from './dependencies';

const Dashboard = () => {
  const { setSetting, designState } = useDesign();
  const { settings } = designState.current;

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات نمتیش مقالات" />
      <BaseSettings settings={settings} setSetting={setSetting} />
    </DrawerLayout>
  );
};

export default Dashboard;

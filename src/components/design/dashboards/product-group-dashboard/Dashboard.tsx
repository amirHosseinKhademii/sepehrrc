import { HeaderDrawer } from '../common';
import { DrawerLayout } from 'components';
import { useDesign } from 'hooks';
import { BaseSettings } from './dependencies';

const Dashboard = () => {
  const { setSetting, designState } = useDesign();
  const { settings } = designState.current;

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات گروه محصولات" />
      <BaseSettings setSetting={setSetting} settings={settings} />
    </DrawerLayout>
  );
};

export default Dashboard;

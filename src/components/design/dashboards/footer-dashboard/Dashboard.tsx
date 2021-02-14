import { DrawerLayout } from 'components';
import { Input } from 'components/design/input';
import { ButtonDrawer, HeaderDrawer } from '../common';
import { StyleBoxFooter } from './dependencies/style-box-footer';

const Dashboard = ({ designState }) => {
  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        <StyleBoxFooter />
        <ButtonDrawer
          withSetting
          text="تنظیمات منوی سایت"
          className="mt-10px"
        />
        <Input
          variant="textArea"
          label="متن درباره فروشگاه"
          className="mt-30px"
        />
        <Input
          variant="textArea"
          label="متن  کپی رایت"
          className="mt-30px"
          height="76px"
        />
        <Input
          variant="input"
          withSwitch
          className="mt-30px"
          label="تلفن تماس"
        />
      </div>
    );
  };

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات فوتر" />
      <BaseSettings />
    </DrawerLayout>
  );
};

export default Dashboard;

import { DrawerLayout, Input, Switch } from 'components';

import {
  ButtonDrawer,
  GenericUploader,
  HeaderDrawer,
  ResponsiveSwitchs,
} from '../common';
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
          className="my-30px"
          label="تلفن تماس"
        />
        <Switch label="نماد اعتماد" />
        <ButtonDrawer
          withSetting
          text="تنظیمات نماد اعتماد"
          className="my-14px"
        />
        <Switch label="اپلیکیشن موبایل" />
        <ButtonDrawer
          withSetting
          text="تنظیمات  اپلیکیشن موبایل"
          className="my-14px"
        />
        <Switch label="توصیر زمینه" />
        <GenericUploader isBackground className="my-14px" />
        <ResponsiveSwitchs />
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

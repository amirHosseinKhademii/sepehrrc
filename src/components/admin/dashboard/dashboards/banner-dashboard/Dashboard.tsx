import { DrawerLayout } from 'components/admin/layouts';
import { StyleBoxBanner, HeaderDrawer, ButtonGroupDrawer } from 'components';
import { TitleInput } from '../common';
import { UploadButtonGroup } from './dependencies';

export const BannerDashboard = () => {
  const BaseSettings = () => (
    <div className="flex flex-col items-end pt-30px px-20px">
      <TitleInput />
      <StyleBoxBanner />
      <UploadButtonGroup />
    </div>
  );

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات بنر تبلیغاتی" />
      <BaseSettings />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};

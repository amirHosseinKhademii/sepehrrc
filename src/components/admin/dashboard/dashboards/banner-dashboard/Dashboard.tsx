import { StyleBoxBanner, HeaderDrawer, DrawerLayout } from 'components';
import { TitleInput } from '../common';
import { UploadButtonGroup } from './dependencies';
import { FC, memo } from 'react';

export const BannerDashboard: FC<IBannerDashboard> = memo(({ designState }) => {
  const BaseSettings = () => (
    <div className="flex flex-col items-end pt-30px px-20px">
      <TitleInput />
      <StyleBoxBanner />
      <UploadButtonGroup designState={designState} />
    </div>
  );

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات بنر تبلیغاتی" />
      <BaseSettings />
    </DrawerLayout>
  );
});

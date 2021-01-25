import { DrawerLayout } from 'components/admin/layouts';
import { HeaderDrawer, ButtonGroupDrawer } from 'components';
import { DropDownGroup, ImageButtons } from './dependencies';
import {
  BackgroundColor,
  TitleInput,
  ResponsiveSwitchs,
  GenericUploader,
} from '../common';

export const BrandDashboard = () => {
  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        <TitleInput />
        <ImageButtons />
        <DropDownGroup />
        <GenericUploader label="تصویر زمینه" text="انتخاب کنید" />
        <BackgroundColor />
        <ResponsiveSwitchs />
      </div>
    );
  };

  return (
    <DrawerLayout>
      <HeaderDrawer setting text=" تنظیمات لوگو مشتریان " />
      <BaseSettings />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};

import { DrawerLayout } from 'components/admin/layouts';
import { StyleBoxHeader, HeaderDrawer, ButtonGroupDrawer } from 'components';
import { MenuEditGroup, InputBox } from './dependencies';
import { ImageUploader } from '../common';

export const HeaderDashboard = () => {
  const BaseSetttings = () => {
    return (
      <div className="w-full flex flex-col items-end pt-30px px-20px">
        <StyleBoxHeader />
        <MenuEditGroup />
        <ImageUploader label="لوگو" number="one" uploaderLabel="انتخاب لوگو" />
        <InputBox label="شماره تلفن" type="tel" placeholder="0519876543" />
        <InputBox
          label="دکمه هدر"
          type="button"
          placeholder="محصولات فروشگاه"
        />
      </div>
    );
  };
  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات هدر" />
      <BaseSetttings />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};

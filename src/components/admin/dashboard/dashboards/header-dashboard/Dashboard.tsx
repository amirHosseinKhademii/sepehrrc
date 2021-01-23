import { FC } from 'react';
import { DrawerLayout } from 'components/admin/layouts';
import { useClass, useDesign } from 'hooks';
import { StyleBoxHeader, HeaderDrawer, ButtonGroupDrawer } from 'components';
import { MenuEditGroup, LogoUploader, InputBox } from './dependencies';

export const HeaderDashboard = () => {
  const { join } = useClass();
  const { designState, setProps, setPureImage } = useDesign();
  const { pureImage } = designState;

  const BaseSetttings = () => {
    return (
      <div className="w-full flex flex-col items-end pt-30px px-20px">
        <StyleBoxHeader />
        <MenuEditGroup />
        <LogoUploader />
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

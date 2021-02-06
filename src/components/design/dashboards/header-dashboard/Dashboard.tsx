import { HeaderDrawer, DrawerLayout } from 'components';
import { MenuEditGroup, InputBox, StyleBoxHeader } from './dependencies';
import { GenericUploader } from '../common';
import { FC, memo } from 'react';

export const HeaderDashboard: FC<IHeaderDashboard> = memo(({ designState }) => {
  const { settings } = designState.current;

  const BaseSetttings = () => {
    return (
      <div className="w-full flex flex-col items-end pt-30px px-20px">
        <StyleBoxHeader />
        <MenuEditGroup designState={designState} />
        <GenericUploader
          label="لوگو"
          number="one"
          text="انتخاب لوگو"
          className="mb-30px"
          withLink
          withNewTab
        />
        <InputBox
          label="شماره تلفن"
          type="tel"
          placeholder={settings?.tel ? settings.tel : '09100000000'}
        />
        <InputBox
          label="دکمه هدر"
          type="button"
          placeholder={settings?.button ? settings.button : 'ورود/عضویت'}
        />
      </div>
    );
  };
  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات هدر" />
      <BaseSetttings />
    </DrawerLayout>
  );
});

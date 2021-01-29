import { DrawerLayout } from 'components/admin/layouts';
import { StyleBoxHeader, HeaderDrawer, ButtonGroupDrawer } from 'components';
import { MenuEditGroup, InputBox } from './dependencies';
import { GenericUploader } from '../common';
import { useDesign } from 'hooks';

export const HeaderDashboard = () => {
  const { designState } = useDesign();
  const { current } = designState;

  const BaseSetttings = () => {
    return (
      <div className="w-full flex flex-col items-end pt-30px px-20px">
        <StyleBoxHeader />
        <MenuEditGroup />
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
          placeholder={current?.telNumber ? current.telNumber : '09100000000'}
        />
        <InputBox
          label="دکمه هدر"
          type="button"
          placeholder={current?.buttonText ? current.buttonText : 'ورود/عضویت'}
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

import { HeaderDrawer, DrawerLayout } from 'components';
import { MenuEditGroup, InputBox, StyleBoxHeader } from './dependencies';
import { GenericUploader, ResponsiveSwitchs, SocialGroup } from '../common';
import { FC, memo } from 'react';
import { useDirection } from 'hooks';

const HeaderDashboard: FC<IHeaderDashboard> = memo(({ designState }) => {
  const { settings } = designState.current;
  const { language } = useDirection();
  const BaseSetttings = () => {
    return (
      <div className="w-full flex flex-col items-end pt-30px px-20px">
        <StyleBoxHeader />
        <MenuEditGroup designState={designState} />
        <GenericUploader
          label={language.HDLogo}
          number="one"
          text={language.HDChooseLogo}
          className="mb-30px"
          withLink
          withNewTab
        />
        <InputBox label={language.HDHeaderButton} type="button" />
        <InputBox
          label={language.HDPhoneNumber}
          type="tel"
          placeholder={settings?.tel ? settings.tel : '09100000000'}
        />
        <InputBox label="" type="social" />
        <ResponsiveSwitchs className="mb-50px mt-30px" />
      </div>
    );
  };
  return (
    <DrawerLayout>
      <HeaderDrawer setting text={language.HDHeaderSettings} />
      <BaseSetttings />
    </DrawerLayout>
  );
});

export default HeaderDashboard;

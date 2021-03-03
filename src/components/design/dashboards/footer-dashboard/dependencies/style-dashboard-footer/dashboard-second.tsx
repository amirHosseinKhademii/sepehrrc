import { Input } from 'components';
import { ButtonDrawer, ResponsiveSwitchs } from '../../../common';
import {
  StyleBoxFooter,
  TelInput,
  SocialGroup,
  DarkSelect,
} from '../../dependencies';

export const DashboardSecond = ({ setSetting, settings }) => {
  return (
    <div className="flex flex-col items-end py-30px px-20px">
      <StyleBoxFooter />
      <ButtonDrawer
        withSetting
        text="تنظیمات منوی سایت"
        className="mt-10px cursor-pointer"
      />
      <TelInput settings={settings} setSetting={setSetting} />
      <SocialGroup setSetting={setSetting} settings={settings} />
      <Input
        variant="textArea"
        label="متن  کپی رایت"
        className="mt-30px"
        height="76px"
        onBlur={(e) => setSetting({ copyRight: e.target.value })}
        placeholder={
          settings.copyRight ? settings.copyRight : 'توضیحات را اینجا بنویسید'
        }
      />
      <DarkSelect setSetting={setSetting} settings={settings} />
      <ResponsiveSwitchs className="mt-0px" />
    </div>
  );
};

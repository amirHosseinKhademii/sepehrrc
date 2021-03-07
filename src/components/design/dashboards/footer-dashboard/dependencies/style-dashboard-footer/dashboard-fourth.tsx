import { Input } from 'components';
import { ButtonDrawer, ResponsiveSwitchs } from '../../../common';
import {
  StyleBoxFooter,
  TelInput,
  SocialGroup,
  TrustSetting,
  DarkSelect,
} from '../../dependencies';

const DashboardFourth = ({ setSetting, settings }) => {
  return (
    <div className="flex flex-col items-end py-30px px-20px">
      <StyleBoxFooter />
      <ButtonDrawer
        withSetting
        text="تنظیمات منوی اول فوتر"
        className="mt-10px cursor-pointer"
      />
      <ButtonDrawer
        withSetting
        text="تنظیمات منوی دوم فوتر"
        className="mt-10px cursor-pointer"
      />
      <TelInput settings={settings} setSetting={setSetting} />
      <SocialGroup setSetting={setSetting} settings={settings} />
      <TrustSetting setSetting={setSetting} settings={settings} />
      <Input
        variant="textArea"
        label="متن درباره فروشگاه"
        className="mt-30px"
        onBlur={(e) => setSetting({ about: e.target.value })}
        placeholder={
          settings.about ? settings.about : 'توضیحات را اینجا بنویسید'
        }
      />
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
export default DashboardFourth;

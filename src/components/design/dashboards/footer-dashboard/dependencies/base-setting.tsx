import { Input, Switch } from 'components';
import { ButtonDrawer, ResponsiveSwitchs } from '../../common';
import {
  StyleBoxFooter,
  TelInput,
  SocialGroup,
  TrustSetting,
  MobileSetting,
} from '.';

const BaseSettings = ({ setSetting, settings }) => {
  return (
    <div className="flex flex-col items-end py-30px px-20px">
      <StyleBoxFooter />
      <ButtonDrawer withSetting text="تنظیمات منوی سایت" className="mt-10px" />
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
      <TelInput settings={settings} setSetting={setSetting} />
      <SocialGroup setSetting={setSetting} settings={settings} />
      <TrustSetting setSetting={setSetting} settings={settings} />
      <MobileSetting setSetting={setSetting} settings={settings} />
      <Switch
        className="my-30px"
        label="دارک مود"
        onClick={() =>
          setSetting({ dark: settings.dark ? !settings.dark : true })
        }
        checked={settings.dark}
      />
      <ResponsiveSwitchs className="mt-0px" />
    </div>
  );
};
export default BaseSettings;

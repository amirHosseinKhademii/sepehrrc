import { Input, Switch } from 'components';
import dynamic from 'next/dynamic';
import { ButtonDrawer, ResponsiveSwitchs } from '../../common';
import { StyleBoxFooter } from './style-box-footer';

const SocialGroup = dynamic(() => import('./social-group'));

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
      <Switch
        label=" تلفن تماس"
        className="mt-30px"
        onClick={() => setSetting({ tel: !settings.tel })}
        checked={settings.tel}
      />
      {settings.tel && (
        <Input
          variant="input"
          withNumber
          className=" text-center mt-14px"
          onBlur={(e) => setSetting({ tel: e.target.value })}
          placeholder={settings.tel !== true ? settings.tel : ' 021-23456789'}
        />
      )}
      <Switch
        label=" شبکه های اجتماعی"
        onClick={() => setSetting({ social: !settings.social })}
        checked={settings.social}
        className="mt-30px"
      />

      {settings.social && (
        <SocialGroup setSetting={setSetting} settings={settings} />
      )}
      <Switch
        label="نماد اعتماد"
        onClick={() => setSetting({ trust: !settings.trust })}
        checked={settings.trust}
        className="mt-30px"
      />
      {settings.trust && (
        <ButtonDrawer
          withSetting
          text="تنظیمات نماد اعتماد"
          className="mt-14px"
        />
      )}
      <Switch
        label="اپلیکیشن موبایل"
        className=" mt-30px"
        onClick={() => setSetting({ mobileApp: !settings.mobileApp })}
        checked={settings.mobileApp}
      />
      {settings.mobileApp && (
        <ButtonDrawer
          withSetting
          text="تنظیمات  اپلیکیشن موبایل"
          className="mt-14px"
        />
      )}
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

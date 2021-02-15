import { Input, Switch } from 'components';
import { useState } from 'react';
import {
  BackgroundColor,
  ButtonDrawer,
  GenericUploader,
  ResponsiveSwitchs,
} from '../../common';
import { StyleBoxFooter } from './style-box-footer';

const BaseSettings = ({ setSetting, settings }) => {
  const [local, setlocal] = useState({
    tel: true,
    trust: true,
    mobileApp: true,
    backgrundImage: true,
    backgroundColor: true,
  });
  return (
    <div className="flex flex-col items-end pt-30px px-20px">
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
        label=" شماره تماس"
        className="mt-30px mb-20px"
        onClick={() => setlocal((prev) => ({ ...prev, tel: !prev.tel }))}
        checked={local.tel}
      />

      <Input
        disabled={!local.tel}
        variant="input"
        className="mb-30px text-center"
        onBlur={(e) => setSetting({ tel: e.target.value })}
        placeholder={settings.tel ? settings.tel : ' 021-23456789'}
      />

      <Switch
        label="نماد اعتماد"
        onClick={() => setlocal((prev) => ({ ...prev, trust: !prev.trust }))}
        checked={local.trust}
      />
      <ButtonDrawer
        disabled={!local.trust}
        withSetting
        text="تنظیمات نماد اعتماد"
        className="mt-14px"
      />
      <Switch
        label="اپلیکیشن موبایل"
        className="mt-30px"
        onClick={() =>
          setlocal((prev) => ({ ...prev, mobileApp: !prev.mobileApp }))
        }
        checked={local.mobileApp}
      />
      <ButtonDrawer
        disabled={!local.mobileApp}
        withSetting
        text="تنظیمات  اپلیکیشن موبایل"
        className="mt-14px"
      />
      <Switch
        className="mt-30px"
        label="توصیر زمینه"
        onClick={() =>
          setlocal((prev) => ({
            ...prev,
            backgrundImage: !prev.backgrundImage,
          }))
        }
        checked={local.backgrundImage}
      />
      <GenericUploader isBackground className="mt-14px" />
      <Switch
        label="رنگ زمینه"
        className="-mb-20px mt-30px"
        onClick={() =>
          setlocal((prev) => ({
            ...prev,
            backgrundColor: !prev.backgroundColor,
          }))
        }
        checked={local.backgroundColor}
      />
      <BackgroundColor />
      <ResponsiveSwitchs />
    </div>
  );
};
export default BaseSettings;

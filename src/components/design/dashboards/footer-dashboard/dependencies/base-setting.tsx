import { Input, Switch, Text } from 'components';
import {
  BackgroundColor,
  ButtonDrawer,
  GenericUploader,
  ResponsiveSwitchs,
} from '../../common';
import { StyleBoxFooter } from './style-box-footer';
import SocialGroup from '../../common/social-group';

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
        className="mt-30px mb-20px"
        onClick={() => setSetting({ tel: !settings.tel })}
        checked={settings.tel}
      />
      {settings.tel && (
        <Input
          variant="input"
          className="mb-30px text-center"
          onBlur={(e) => setSetting({ tel: e.target.value })}
          placeholder={settings.tel !== true ? settings.tel : ' 021-23456789'}
        />
      )}
      <Switch
        label=" شبکه های اجتماعی"
        onClick={() => setSetting({ social: !settings.social })}
        checked={settings.social}
        className="mb-14px"
      />

      {settings.social && (
        <SocialGroup setSetting={setSetting} settings={settings} />
      )}

      <Switch
        label="نماد اعتماد"
        onClick={() => setSetting({ trust: !settings.trust })}
        checked={settings.trust}
        className="mb-14px"
      />
      {settings.trust && (
        <ButtonDrawer
          withSetting
          text="تنظیمات نماد اعتماد"
          className="mb-30px"
        />
      )}
      <Switch
        label="اپلیکیشن موبایل"
        className="mb-14px"
        onClick={() => setSetting({ mobileApp: !settings.mobileApp })}
        checked={settings.mobileApp}
      />
      {settings.mobileApp && (
        <ButtonDrawer
          withSetting
          text="تنظیمات  اپلیکیشن موبایل"
          className="mb-30px"
        />
      )}
      <Text className="text-white_shade-100 text-14px">رنگ بندی فوتر</Text>
      <div className="w-full rounded h-54px mt-14px mb-30px bg-gray_shade-800 flex items-center justify-between">
        <div
          className={` w-1/2  flex items-center justify-center h-full border-r rounded-l border-gray_shade-900 cursor-pointer ${
            settings.dark && 'bg-primary-800'
          }`}
          onClick={() => setSetting({ dark: true })}
        >
          <Text
            className={`text-14px ${
              settings.dark ? 'text-white_shade-100' : 'text-gray_shade-300'
            }`}
          >
            تیره
          </Text>
        </div>
        <div
          className={` w-1/2  flex items-center justify-center h-full rounded-r cursor-pointer  ${
            !settings.dark && 'bg-primary-800'
          }`}
          onClick={() => setSetting({ dark: false })}
        >
          <Text
            className={`text-14px ${
              !settings.dark ? 'text-white_shade-100' : 'text-gray_shade-300'
            }`}
          >
            روشن
          </Text>
        </div>
      </div>
      {/* <Switch
        className="mb-14px"
        label="توصیر زمینه"
        onClick={() =>
          setSetting({ backgroundImage: !settings.backgroundImage })
        }
        checked={settings.backgroundImage}
      /> */}
      {/*settings.backgroundImage && (
        <GenericUploader isBackground className="mb-30px" />
      )*/}

      {/* <Switch
        label="رنگ زمینه"
        className=" mb-14px"
        onClick={() =>
          setSetting({ backgroundColor: !settings.backgroundColor })
        }
        checked={settings.backgroundColor}
      /> */}
      {/*settings.backgroundColor !== undefined &&
        settings.backgroundColor !== false && (
          <BackgroundColor className="mb-30px" />
        )*/}
      <ResponsiveSwitchs className="mt-0px" />
    </div>
  );
};
export default BaseSettings;

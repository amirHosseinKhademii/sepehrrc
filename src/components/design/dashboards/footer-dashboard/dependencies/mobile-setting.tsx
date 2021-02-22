import { Switch } from 'components';
import { Fragment } from 'react';
import { ButtonDrawer } from '../../common';

export const MobileSetting = ({ settings, setSetting }) => {
  return (
    <Fragment>
      <Switch
        label="اپلیکیشن موبایل"
        className=" mt-30px"
        onClick={() =>
          setSetting({
            mobileApp:
              settings.mobileApp === undefined ? false : !settings.mobileApp,
          })
        }
        checked={settings.mobileApp == undefined ? true : settings.mobileApp}
      />
      {settings.mobileApp === undefined ? (
        <ButtonDrawer
          withSetting
          text="تنظیمات  اپلیکیشن موبایل"
          className="mt-14px"
        />
      ) : (
        settings.mobileApp && (
          <ButtonDrawer
            withSetting
            text="تنظیمات  اپلیکیشن موبایل"
            className="mt-14px"
          />
        )
      )}
    </Fragment>
  );
};

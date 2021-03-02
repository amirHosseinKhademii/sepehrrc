import { Switch } from 'components';
import { Fragment } from 'react';
import { ButtonDrawer } from '../../common';

export const TrustSetting = ({ settings, setSetting }) => {
  return (
    <Fragment>
      <Switch
        label="نماد اعتماد"
        onClick={() =>
          setSetting({
            trust: settings.trust === undefined ? false : !settings.trust,
          })
        }
        checked={settings.trust == undefined ? true : settings.trust}
        className="mt-30px"
      />
      {settings.trust === undefined ? (
        <ButtonDrawer
          withSetting
          text="تنظیمات نماد اعتماد"
          className="mt-14px"
        />
      ) : (
        settings.trust && (
          <ButtonDrawer
            withSetting
            text="تنظیمات نماد اعتماد"
            className="mt-14px"
          />
        )
      )}
    </Fragment>
  );
};

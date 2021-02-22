import { Switch, Input } from 'components';
import { Fragment } from 'react';

export const TelInput = ({ settings, setSetting }) => {
  return (
    <Fragment>
      <Switch
        label=" تلفن تماس"
        className="mt-30px"
        onClick={() =>
          setSetting({
            tel: settings.tel === undefined ? false : !settings.tel,
          })
        }
        checked={settings.tel == undefined ? true : settings.tel}
      />
      {settings.tel === undefined ? (
        <Input
          variant="input"
          withNumber
          className=" text-center mt-14px"
          onBlur={(e) => setSetting({ tel: e.target.value })}
          placeholder={
            typeof settings.tel === 'string' ? settings.tel : ' 021-23456789'
          }
        />
      ) : (
        settings.tel && (
          <Input
            variant="input"
            withNumber
            className=" text-center mt-14px"
            onBlur={(e) => setSetting({ tel: e.target.value })}
            placeholder={settings.tel !== true ? settings.tel : ' 021-23456789'}
          />
        )
      )}
    </Fragment>
  );
};

import { Fragment } from 'react';
import { useDesign, useDirection } from 'hooks';
import { Text, Input, CheckBox, Switch } from 'components';
import { SocialGroup } from '../../common';

export const InputBox = ({ label, placeholder = '', type }) => {
  const { designState, setSetting, setButtonProps } = useDesign();
  const { settings } = designState.current;
  const currentStyle = designState.current.settings.style;
  const { textAlignRtl, language } = useDirection();

  if (
    type === 'tel' &&
    currentStyle !== 'first' &&
    currentStyle !== 'second' &&
    currentStyle
  ) {
    return (
      // <div className="w-full  mb-30px ">
      //   <Text
      //     className={` mb-14px text-14px text-white_shade-100 ${textAlignRtl}`}
      //   >
      //     {label}
      //   </Text>

      //   <Input
      //     placeholder={placeholder}
      //     maxLength={15}
      //     variant="input"
      //     withNumber
      //     onBlur={(event) => setSetting({ tel: event.target.value })}
      //   />
      // </div>
      <Fragment>
        <Switch
          label={label}
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
              typeof settings.tel === 'string' ? settings.tel : '021-23456789'
            }
          />
        ) : (
          settings.tel && (
            <Input
              variant="input"
              withNumber
              className=" text-center mt-14px"
              onBlur={(e) => setSetting({ tel: e.target.value })}
              placeholder={
                settings.tel !== true ? settings.tel : ' 021-23456789'
              }
            />
          )
        )}
      </Fragment>
    );
  } else if (
    type === 'button' &&
    currentStyle !== 'second' &&
    currentStyle !== 'seventh'
  ) {
    return (
      <div className="w-full ">
        <Text
          className={` mb-14px text-14px text-white_shade-100 ${textAlignRtl}`}
        >
          {label}
        </Text>
        <Input
          maxLength={30}
          placeholder={
            settings?.button && settings.button?.text
              ? settings.button.text
              : `${language.HDSign}`
          }
          variant="input"
          onBlur={(event) => {
            setButtonProps({ key: 'text', value: event.target.value });
          }}
        />
        <Input
          maxLength={30}
          withLink
          className="mt-15px"
          variant="inputIcon"
          onBlur={(event) => {
            setButtonProps({ key: 'link', value: event.target.value });
          }}
          disabled={!settings?.button}
          placeholder={
            settings?.button && settings.button?.link
              ? settings.button.link
              : ''
          }
        />
        <CheckBox
          className="mt-15px"
          label={language.HDOpenNewTab}
          onClick={() => {
            setButtonProps({
              key: 'newTab',
              value:
                settings?.button && settings.button.newTab
                  ? !settings.button.newTab
                  : true,
            });
          }}
          checked={settings?.button && settings.button.newTab}
          disabled={!settings?.button}
        />
      </div>
    );
  } else if (
    (type === 'social' && currentStyle == 'fourth') ||
    currentStyle == 'sixth' ||
    currentStyle == 'eighth'
  ) {
    return <SocialGroup settings={settings} setSetting={setSetting} />;
  } else {
    return null;
  }
};

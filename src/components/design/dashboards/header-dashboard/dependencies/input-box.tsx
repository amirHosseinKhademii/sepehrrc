import { useDesign } from 'hooks';
import { Text, Input, CheckBox } from 'components';

export const InputBox = ({ label, placeholder = '', type }) => {
  const { designState, setSetting, setButtonProps } = useDesign();
  const { settings } = designState.current;
  const currentStyle = designState.current.settings.style;

  if (
    type === 'tel' &&
    currentStyle !== 'first' &&
    currentStyle !== 'second' &&
    currentStyle
  ) {
    return (
      <div className="w-full  mb-30px ">
        <Text className=" mb-14px text-14px text-white_shade-100 text-right">
          {label}
        </Text>

        <Input
          placeholder={placeholder}
          maxLength={15}
          variant="input"
          withNumber
          onBlur={(event) => setSetting({ tel: event.target.value })}
        />
      </div>
    );
  } else if (
    type === 'button' &&
    currentStyle !== 'second' &&
    currentStyle !== 'seventh'
  ) {
    return (
      <div className="w-full  mb-90px ">
        <Text className=" mb-14px text-14px text-white_shade-100 text-right">
          {label}
        </Text>
        <Input
          maxLength={30}
          placeholder={
            settings?.button && settings.button?.text
              ? settings.button.text
              : 'ورود/عضویت'
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
          label="باز کردن صفحه در تب جدید "
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
  } else {
    return null;
  }
};

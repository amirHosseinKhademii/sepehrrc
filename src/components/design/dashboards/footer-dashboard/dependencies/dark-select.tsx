import { Text, ButtonGroup } from 'components';
import { SettingButton } from '../../common';

export const DarkSelect = ({ settings, setSetting }) => {
  return (
    <ButtonGroup
      label="رنگ بندی فوتر"
      groupClass="grid grid-cols-2"
      className="mt-30px mb-30px"
    >
      <SettingButton
        child="روشن"
        active={settings && !settings.dark}
        className="rounded-l"
        onClick={() => setSetting({ dark: settings.dark ? false : true })}
      />
      <SettingButton
        child="تیره"
        active={settings && settings.dark}
        className="rounded-r border-r border-l border-gray_shade-900"
        onClick={() =>
          setSetting({ dark: settings.dark ? !settings.dark : true })
        }
      />
    </ButtonGroup>
  );
};

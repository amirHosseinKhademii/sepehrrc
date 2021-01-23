import { SettingButton } from './setting-button';
import { ButtonGroup } from 'components';
import { useDesign } from 'hooks';

export const ShowTypeButtonGroup = () => {
  const { designState, setSetting } = useDesign();
  const { settings } = designState.current;
  return (
    <ButtonGroup
      label="حالت نمایش قبلی / بعدی"
      groupClass="grid grid-cols-3"
      className="mt-30px"
    >
      <SettingButton
        text="..."
        active={settings && settings.button && settings.button == 'first'}
        className=" rounded-l "
        onClick={() => setSetting({ button: 'first' })}
      />
      <SettingButton
        text="< >"
        active={settings && settings.button && settings.button == 'second'}
        className=" border-r border-l border-gray_shade-900"
        onClick={() => setSetting({ button: 'second' })}
      />
      <SettingButton
        text="<...>"
        active={settings && settings.button && settings.button == 'third'}
        className="rounded-r"
        onClick={() => setSetting({ button: 'third' })}
      />
    </ButtonGroup>
  );
};

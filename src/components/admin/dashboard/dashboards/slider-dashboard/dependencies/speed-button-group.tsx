import { useDesign } from 'hooks';
import { ButtonGroup } from 'components';
import { SettingButton } from './setting-button';

export const SpeedButtonGroup = () => {
  const { designState, setSetting } = useDesign();
  const { settings } = designState.current;

  return (
    <ButtonGroup
      label="سرعت اسلاید ها"
      groupClass="grid grid-cols-3"
      className="mt-30px"
    >
      <SettingButton
        child="سریع"
        active={settings && settings.speed && settings.speed == 'fast'}
        className=" rounded-l"
        onClick={() => setSetting({ speed: 'fast' })}
      />
      <SettingButton
        child="متوسط"
        active={
          (settings && settings.speed && settings.speed == 'normal') ||
          !settings.speed
        }
        className="border-r border-l border-gray_shade-900"
        onClick={() => setSetting({ speed: 'normal' })}
      />
      <SettingButton
        child="آرام"
        active={settings && settings.speed && settings.speed == 'slow'}
        className="rounded-r"
        onClick={() => setSetting({ speed: 'slow' })}
      />
    </ButtonGroup>
  );
};

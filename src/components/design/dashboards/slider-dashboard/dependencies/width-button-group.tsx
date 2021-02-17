import { ButtonGroup } from 'components';
import { useDesign, useDirection } from 'hooks';
import { SettingButton } from './setting-button';

export const WidthButtonGroup = () => {
  const { designState, setSetting } = useDesign();
  const { language } = useDirection();

  const { settings } = designState.current;
  return (
    <ButtonGroup
      label={language.SDSliderWidth}
      groupClass="grid grid-cols-2"
      className="mt-30px"
    >
      <SettingButton
        child={language.SDSliderFullWidth}
        active={settings && settings.screen && settings.screen == 'full'}
        className=" rounded-l border-r border-gray_shade-900"
        onClick={() => setSetting({ screen: 'full' })}
      />
      <SettingButton
        child={language.SDSliderWidthSimple}
        active={
          (settings && settings.screen && settings.screen == 'simple') ||
          !settings.screen
        }
        className="rounded-r"
        onClick={() => setSetting({ screen: 'simple' })}
      />
    </ButtonGroup>
  );
};

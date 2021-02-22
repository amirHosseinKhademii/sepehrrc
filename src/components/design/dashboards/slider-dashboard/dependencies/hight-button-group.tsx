import { useDesign, useDirection } from 'hooks';
import { ButtonGroup } from 'components';
import { SettingButton } from './setting-button';

export const HightButtonGroup = () => {
  const { designState, setSetting } = useDesign();
  const { language } = useDirection();
  const { settings } = designState.current;

  return (
    <ButtonGroup
      label={language.SDSlidesHeight}
      groupClass="grid grid-cols-3"
      className="mt-30px"
    >
      <SettingButton
        child={language.SDBigHeight}
        active={settings && settings.height && settings.height == 'big'}
        className="rounded-l"
        onClick={() => setSetting({ height: 'big' })}
      />
      <SettingButton
        child={language.SDMediumHeight}
        active={
          (settings && settings.height && settings.height == 'normal') ||
          !settings.height
        }
        className="border-r border-l border-gray_shade-900"
        onClick={() => setSetting({ height: 'normal' })}
      />
      <SettingButton
        child={language.SDSmallHeight}
        active={settings && settings.height && settings.height == 'small'}
        className="rounded-r"
        onClick={() => setSetting({ height: 'small' })}
      />
    </ButtonGroup>
  );
};

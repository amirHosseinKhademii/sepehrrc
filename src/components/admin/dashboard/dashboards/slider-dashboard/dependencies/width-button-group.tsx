import { ButtonGroup } from 'components';
import { useDesign } from 'hooks';
import { SettingButton } from './setting-button';

export const WidthButtonGroup = () => {
  const { designState, setSetting } = useDesign();
  const { settings } = designState.current;
  return (
    <ButtonGroup
      label="عرض اسلایدر "
      groupClass="grid grid-cols-2"
      className="mt-30px"
    >
      <SettingButton
        text="تمام صفحه"
        active={settings && settings.screen && settings.screen == 'full'}
        className=" rounded-l border-r border-gray_shade-900"
        onClick={() => setSetting({ screen: 'full' })}
      />
      <SettingButton
        text=" ساده"
        active={settings && settings.screen && settings.screen == 'simple'}
        className="rounded-r"
        onClick={() => setSetting({ screen: 'simple' })}
      />
    </ButtonGroup>
  );
};

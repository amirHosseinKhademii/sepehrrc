import { ButtonGroup } from 'components';
import { useClass, useDesign } from 'hooks';

export const ScreenButtonGroup = () => {
  const { toggle } = useClass();
  const { designState, setSetting } = useDesign();
  const { settings } = designState.current;

  const SettingButton = ({ text, active, className, onClick }) => (
    <button
      className={toggle(
        'h-54px focus:outline-none',
        `bg-primary-700 text-white_shade-100 text-14px ${className}`,
        active,
        ` bg-gray_shade-800 text-gray-300 text-14px ${className}`
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );

  return (
    <ButtonGroup
      label=" حالت نمایش "
      groupClass="grid grid-cols-2"
      className="mt-30px mb-30px"
    >
      <SettingButton
        text=" لیست"
        active={settings && settings.screen !== 'slider'}
        className=" rounded-l border-r border-gray_shade-900"
        onClick={() => setSetting({ screen: 'list' })}
      />
      <SettingButton
        text=" اسلایدر"
        active={settings && settings.screen && settings.screen == 'slider'}
        className="rounded-r "
        onClick={() => setSetting({ screen: 'slider' })}
      />
    </ButtonGroup>
  );
};

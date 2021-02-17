import { ButtonGroup } from 'components';
import { useClass, useDesign, useDirection } from 'hooks';

export const ScreenButtonGroup = () => {
  const { toggle } = useClass();
  const { designState, setSetting } = useDesign();
  const { language } = useDirection();
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
      label={language.PDDisplayMode}
      groupClass="grid grid-cols-2"
      className="mt-30px mb-30px"
    >
      <SettingButton
        text={language.PDList}
        active={settings && settings.screen && settings.screen == 'list'}
        className=" rounded-l border-r border-gray_shade-900"
        onClick={() => setSetting({ screen: 'list' })}
      />
      <SettingButton
        text={language.PDSlider}
        active={settings && settings.screen !== 'list'}
        className="rounded-r "
        onClick={() => setSetting({ screen: 'slider' })}
      />
    </ButtonGroup>
  );
};

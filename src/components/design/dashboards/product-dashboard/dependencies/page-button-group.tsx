import { ButtonGroup } from 'components';
import { useClass, useDesign, useDirection } from 'hooks';

export const PageButtonGroup = () => {
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
      label={language.PDShowPagination}
      groupClass="grid grid-cols-2"
      className="my-30px"
    >
      <SettingButton
        text={language.PDInactive}
        active={settings && settings.pagination == 'disabled'}
        className="rounded-l border-r border-gray_shade-900"
        onClick={() => setSetting({ pagination: 'disabled' })}
      />
      <SettingButton
        text={language.PDActive}
        active={settings && settings.pagination !== 'disabled'}
        className=" rounded-r "
        onClick={() => setSetting({ pagination: 'enabled' })}
      />
    </ButtonGroup>
  );
};

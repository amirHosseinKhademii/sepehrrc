import { ButtonGroup } from 'components';
import { useClass, useDesign } from 'hooks';

export const PageButtonGroup = () => {
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
      label="  نمایش صفحه بندی "
      groupClass="grid grid-cols-2"
      className="my-30px"
    >
      <SettingButton
        text=" غیر فعال"
        active={settings && settings.pagination == 'disabled'}
        className="rounded-l border-r border-gray_shade-900"
        onClick={() => setSetting({ pagination: 'disabled' })}
      />
      <SettingButton
        text=" فعال"
        active={settings && settings.pagination !== 'disabled'}
        className=" rounded-r "
        onClick={() => setSetting({ pagination: 'enabled' })}
      />
    </ButtonGroup>
  );
};

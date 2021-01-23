import { useClass } from 'hooks';

export const SettingButton = ({ text, active, className, onClick }) => {
  const { toggle } = useClass();

  return (
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
};

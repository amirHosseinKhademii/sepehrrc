import { useClass, useDirection } from 'hooks';

export const SettingButton = ({ child, active, className, onClick }) => {
  const { toggle } = useClass();
  const { dirRtl } = useDirection();

  return (
    <button
      dir={dirRtl}
      className={toggle(
        'flex justify-center items-center h-54px focus:outline-none font-iransans',
        `bg-primary-700 text-white_shade-100 text-14px  ${className}`,
        active,
        `flex justify-center items-center bg-gray_shade-800 text-gray-300 text-14px ${className}`
      )}
      onClick={onClick}
    >
      {child}
    </button>
  );
};

export const BlueBox = ({ className, number, active = false, join }) => (
  <div
    className={join(
      `${
        active ? 'bg-primary-700' : 'bg-gray_shade-900 '
      } rounded flex items-center justify-center`,
      className
    )}
  >
    <span
      className={`${
        active ? 'text-primary-400' : 'text-gray_shade-500'
      } text-14px `}
    >
      {number}
    </span>
  </div>
);

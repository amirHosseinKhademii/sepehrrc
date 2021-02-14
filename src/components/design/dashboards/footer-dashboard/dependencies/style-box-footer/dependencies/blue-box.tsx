export const BlueBox = ({ className, active = false, join }) => (
  <div
    className={join(
      `${active ? 'bg-primary-700' : 'bg-gray_shade-900 '} `,
      className
    )}
  ></div>
);

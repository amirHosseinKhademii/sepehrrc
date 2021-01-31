export const BlueBox = ({ className, active = false, toggle }) => (
  <div className={toggle(className, 'bg-primary-300', active, 'bg-gray-500')}>
    {' '}
  </div>
);

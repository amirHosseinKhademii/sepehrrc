import { useClass } from 'hooks';
import { FC } from 'react';

export const HeaderLayout: FC<IHeaderLayout> = ({
  children,
  layout = true,
  cssAlt,
  toggle,
}) => {
  return (
    <div
      className={toggle(
        'headerLayout',
        'bg-white shadow-custom-1',
        layout,
        cssAlt
      )}
    >
      {children}
    </div>
  );
};

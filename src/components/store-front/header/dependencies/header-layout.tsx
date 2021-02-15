import { useClass } from 'hooks';
import { FC } from 'react';

export const HeaderLayout: FC<IHeaderLayout> = ({
  children,
  layout = true,
  cssAlt,
  toggle,
  id,
  cssClass,
}) => {
  return (
    <div
      className={toggle(
        `header ${cssClass} bg-white `,
        ' shadow-custom-1',
        layout,
        cssAlt
      )}
      id={id}
    >
      {children}
    </div>
  );
};

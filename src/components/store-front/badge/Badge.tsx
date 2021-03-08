import { FC } from 'react';
import { useClass, useDesign, useDirection } from 'hooks';

export const Badge: FC<IBadge> = ({
  children,
  className,
  badgeContent,
  onClick,
  root,
  cssAlt,
  layout = true,
  cssClass = '',
}) => {
  const { designState } = useDesign();
  const { pageSettings } = designState;
  const { rightTL } = useDirection();
  const { toggle, join } = useClass();
  return (
    <div
      className={join('badge__root relative inline-block', root)}
      onClick={onClick}
    >
      {children}
      <div
        className={toggle(
          `badge ${cssClass} absolute ${rightTL}-0 top-0 transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-wrap rounded-full  text-12px `,
          className,
          layout,
          'hidden'
        )}
        style={{ backgroundColor: `${pageSettings.primary}` }}
      >
        {badgeContent}
      </div>
    </div>
  );
};

import { FC } from 'react';
import { useClass, useDesign } from 'hooks';

export const Badge: FC<IBadge> = ({
  children,
  className,
  badgeContent,
  onClick,
  root,
  cssAlt,
  layout = true,
}) => {
  const { designState } = useDesign();
  const { pageSettings } = designState;

  const { toggle, join } = useClass();
  return (
    <span className={join('relative inline-block', root)} onClick={onClick}>
      {children}
      <span
        className={toggle(
          ' absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-wrap rounded-full font-iransans text-12px ',
          className,
          layout,
          cssAlt
        )}
        style={{ backgroundColor: `${pageSettings.primary}` }}
      >
        {badgeContent}
      </span>
    </span>
  );
};

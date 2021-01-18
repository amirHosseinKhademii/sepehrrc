import { Children, FC } from 'react';
import { useClass } from 'hooks';
import { IBadge } from './interfaces';

export const Badge: FC<IBadge> = ({
  children,
  className,
  badgeContent,
  onClick,
  root,
}) => {
  const { join } = useClass();
  return (
    <span className={join('relative inline-block', root)} onClick={onClick}>
      {children}
      <span
        className={join(
          'absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-wrap rounded-full ',
          className
        )}
      >
        {badgeContent}
      </span>
    </span>
  );
};

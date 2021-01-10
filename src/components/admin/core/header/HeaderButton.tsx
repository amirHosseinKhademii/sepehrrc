import { Button } from 'components';
import { useClass } from 'hooks';
import { Children, FC, Fragment } from 'react';

import { IHeaderButton, IContained, IOutline } from './interface';

export const HeaderButton: FC<IHeaderButton> = ({
  variant = 'contained',
  className,
  children,
}) => {
  const { join } = useClass();

  const Contained: FC<IOutline> = ({ className, children }) => {
    return (
      <Button
        className={join(
          'px-8 bg-red-600 text-white  py-4 rounded-full   text-16px',
          className
        )}
      >
        {children}
      </Button>
    );
  };
  const Outline: FC<IContained> = ({ className, children }) => {
    return (
      <Button
        className={join(
          'px-8 bg-white text-red-600 py-4 rounded-full   text-16px border-2 border-red-600 ',
          className
        )}
      >
        {children}
      </Button>
    );
  };

  return (
    <Fragment>
      {variant === 'contained' && (
        <Contained className={className}>{children}</Contained>
      )}
      {variant === 'outline' && (
        <Outline className={className}>{children}</Outline>
      )}
    </Fragment>
  );
};

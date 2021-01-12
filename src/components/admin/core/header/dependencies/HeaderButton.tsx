import { Button } from 'components';
import { useClass } from 'hooks';
import { Children, FC, Fragment } from 'react';
import { IHeaderButton } from '../interface';

export const HeaderButton: FC<IHeaderButton> = ({
  className,
  children,
  outline = false,
}) => {
  const { join } = useClass();

  return (
    <Fragment>
      {!outline ? (
        <Button
          className={join(
            'h-50px px-8 bg-red-600 text-white  py-4 rounded-full   text-16px ',
            className
          )}
        >
          {children}
        </Button>
      ) : (
        <Button
          className={join(
            'px-8 bg-white text-red-600 py-4 rounded-full   text-16px border-2 border-red-600 ',
            className
          )}
        >
          {children}
        </Button>
      )}
    </Fragment>
  );
};

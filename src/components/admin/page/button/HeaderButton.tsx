import { FC } from 'react';
import { PureButton } from 'components';
import { useClass } from 'hooks';
import { IHeaderButton } from './interfaces';
export const HeaderButton: FC<IHeaderButton> = ({
  text,
  layout = true,
  onCLick,
  className,
}) => {
  const { join } = useClass();
  return (
    <PureButton
      className={join(
        ' h-50px bg-red-600 text-white px-20px rounded-25px   text-16px border-2 border-red-600 ',
        className
      )}
      text={text}
      layout={layout}
      onClick={onCLick}
    />
  );
};

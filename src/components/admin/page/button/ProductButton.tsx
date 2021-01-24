import { FC } from 'react';
import { PureButton } from 'components';

import { IProductButton } from './interfaces';
export const ProductButton: FC<IProductButton> = ({
  text,
  layout = true,
  onCLick,
}) => {
  return (
    <PureButton
      className="  p-14px  focus:outline-none mt-9 rounded-50px border-2 border-red-500 text-red-500 text-14px"
      text={text}
      layout={layout}
      onClick={onCLick}
    />
  );
};

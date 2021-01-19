import { FC } from 'react';
import { IPureButton } from './interfaces';
export const PureButton: FC<IPureButton> = ({
  className,
  layout,
  text,
  onClick,
}) => {
  return (
    <button className={layout ? className : ''} onClick={onClick}>
      {text}
    </button>
  );
};

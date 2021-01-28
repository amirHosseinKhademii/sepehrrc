import { FC } from 'react';
import { IPureButton } from './interfaces';
export const PureButton: FC<IPureButton> = ({
  className,
  layout = true,
  text,
  onClick,
  style,
}) => {
  return (
    <button
      className={layout ? className : ''}
      onClick={onClick}
      style={layout ? style : null}
    >
      {text}
    </button>
  );
};

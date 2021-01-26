import { useClass } from 'hooks';
import { FC } from 'react';
import { IButton } from './interfaces';

export const Button: FC<IButton> = ({
  className,
  children,
  onClick,
  disabled,
  style,
  withLabel,
  htmlFor,
}) => {
  const { join } = useClass();
  if (withLabel)
    return (
      <label
        htmlFor={htmlFor}
        className={join(
          'focus:outline-none rounded flex items-center justify-center text-white_shade-100',
          className
        )}
        style={style}
      >
        {children}
      </label>
    );
  else
    return (
      <button
        className={join(
          'focus:outline-none rounded flex items-center justify-center text-white_shade-100',
          className
        )}
        onClick={onClick}
        disabled={disabled}
        style={style}
      >
        {children}
      </button>
    );
};

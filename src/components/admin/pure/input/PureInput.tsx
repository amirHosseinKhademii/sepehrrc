import { FC } from 'react';
import { IPureInput } from './interface';
export const PureInput: FC<IPureInput> = ({
  onClick,
  onChange,
  onBlur,
  placeholder,
  layout,
  className,
}) => {
  return (
    <input
      type="text"
      className={layout ? className : ''}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};

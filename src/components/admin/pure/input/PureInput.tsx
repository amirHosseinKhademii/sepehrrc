import { FC } from 'react';
import { IPureInput } from './interface';
export const PureInput: FC<IPureInput> = ({
  onClick,
  onChange,
  onBlure,
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
      onBlur={onBlure}
      placeholder={placeholder}
    />
  );
};

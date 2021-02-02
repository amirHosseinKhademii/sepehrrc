import { FC } from 'react';

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

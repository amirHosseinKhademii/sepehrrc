import { FC } from 'react';
import { useClass, useDirection } from 'hooks';
export const GeneralInput: FC<IInput> = ({
  layout = true,
  cssClass = '',
  className,
  style,
  placeholder,
  onChange,
  onBlur,
}) => {
  const { toggle } = useClass();
  return (
    <input
      className={toggle(
        `input border-2  px-12  py-4 ${cssClass}`,
        className,
        layout
      )}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
    ></input>
  );
};

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
  onClick,
}) => {
  const { toggle } = useClass();
  const { dirRtl } = useDirection();
  return (
    <input
      className={toggle(
        `input ${cssClass} border-2  px-2  py-4 `,
        className,
        layout
      )}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      onClick={onClick}
      dir={dirRtl}
      style={{ ...style, fontFamily: 'inherit' }}
    ></input>
  );
};

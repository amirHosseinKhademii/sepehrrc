import { FC } from 'react';

export const PureButton: FC<IPureButton> = ({
  className,
  layout = true,
  text,
  onClick,
  style,
  cssAlt,
}) => {
  return (
    <button
      className={layout ? className : cssAlt}
      onClick={onClick}
      style={layout ? style : null}
    >
      {text}
    </button>
  );
};

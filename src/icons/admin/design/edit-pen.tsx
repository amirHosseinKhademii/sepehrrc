import { FC } from 'react';

export const ICEditPen: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      width={width ? width : '1em'}
      height={height ? height : '1em'}
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15.996"
    >
      <path
        fill={fill ? fill : 'current'}
        d="M4.3 18.355a.878.878 0 0 1-.647-.286.867.867 0 0 1-.233-.669l.215-2.365L13.571 5.1l3.105 3.1-9.933 9.937-2.365.215-.078.003zm13-10.772l-3.1-3.1 1.862-1.862a.878.878 0 0 1 1.242 0l1.862 1.862a.878.878 0 0 1 0 1.242L17.3 7.583z"
        transform="translate(-3.416 -2.36)"
      />
    </svg>
  );
};

import { FC } from 'react';
import { useClass } from 'hooks';

export const ICAngleDown: FC<IIcon> = ({
  className,
  height,
  width,
  onClick,
}) => {
  const { join } = useClass();

  return (
    <svg
      width={width ? width : '1em'}
      height={height ? height : '1em'}
      viewBox="0 0 24 24"
      className={join('ic ic-angle-down', className)}
      onClick={onClick}
    >
      <g>
        <path fill="none" d="M0 0H24V24H0z" />
        <path
          fill="current"
          d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42z"
          transform="translate(.119 .55)"
        />
      </g>
    </svg>
  );
};

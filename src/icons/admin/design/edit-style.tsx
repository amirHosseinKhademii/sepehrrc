import { FC } from 'react';

export const ICEditStyle: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '1em'}
      height={height ? height : '1em'}
      viewBox="0 0 16 18.526"
      className={className}
      onClick={onClick}
    >
      <path
        d="M10.5 19.526l-8-4.632V5.632L10.5 1l8 4.632v9.263zm0-16.579L4.184 6.6v7.321L10.5 17.58l6.316-3.656V6.6L10.5 2.946zm0 10.685a3.368 3.368 0 1 1 2.381-.987 3.392 3.392 0 0 1-2.381.987zm0-5.053a1.684 1.684 0 1 0 1.191.493 1.684 1.684 0 0 0-1.191-.493z"
        transform="translate(-2.5 -1)"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};

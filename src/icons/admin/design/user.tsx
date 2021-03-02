import { FC } from 'react';
import { useClass } from 'hooks';

export const ICUser: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  const { join } = useClass();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '1em'}
      height={height ? height : `1em`}
      viewBox="0 0 24 24"
      className={join('ic ic-user', className)}
      onClick={onClick}
    >
      <path data-name="Rectangle 23" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="user"
        d="M16.144 12.573a6 6 0 10-7.42 0 10 10 0 00-6.22 8.18 1.006 1.006 0 102 .22 8 8 0 0115.9 0 1 1 0 001 .89h.11a1 1 0 00.88-1.1 10 10 0 00-6.25-8.19zm-3.71-.71a4 4 0 114-4 4 4 0 01-4 4z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};

export default ICUser;

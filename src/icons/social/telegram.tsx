import { IIcon } from '../interfaces';
import { FC } from 'react';

export const ICTelegram: FC<IIcon> = ({
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill={fill ? fill : 'current'}
        d="M22.472 2.479a2.068 2.068 0 00-2.1-.327L2.278 9.458a2.063 2.063 0 00.106 3.856l3.66 1.273 2.04 6.747a1.008 1.008 0 00.12.255c.008.012.019.021.027.033a1 1 0 00.213.218c.023.018.046.034.07.05a1 1 0 00.314.137h.019a1.032 1.032 0 00.2.021h.019a1 1 0 00.3-.053c.023-.008.042-.021.064-.03a1 1 0 00.206-.116l.154-.129 2.728-3.012 4.07 3.153a2.043 2.043 0 001.253.431 2.074 2.074 0 002.037-1.645l3.294-16.178a2.049 2.049 0 00-.7-1.99zM9.452 14.908a1 1 0 00-.275.511l-.313 1.519-.792-2.618 4.1-2.138zm8.383 5.355l-4.809-3.725a1.011 1.011 0 00-1.367.12l-.874.965.309-1.5 7.152-7.152a1.01 1.01 0 00-1.18-1.609L6.8 12.705l-3.76-1.376 18.154-7.263z"
      />
    </svg>
  );
};

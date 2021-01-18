import { IIcon } from 'icons/interfaces';
import { FC } from 'react';

export const ICPhoneVolume: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width ? width : 24}
      height={height ? height : 24}
      className={className}
      onClick={onClick}
      fill={fill}
    >
      <path data-name="Rectangle 37" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="phone-volume"
        d="M19.336 13.43a3.147 3.147 0 01-.67-.12 9.86 9.86 0 01-1.31-.39 2 2 0 00-2.48 1l-.22.46a13.17 13.17 0 01-2.67-2 13.17 13.17 0 01-2-2.67l.46-.21a2 2 0 001-2.48 10.47 10.47 0 01-.39-1.32c-.05-.22-.09-.45-.12-.67a3 3 0 00-3-2.49h-3.01a2.99 2.99 0 00-2.97 3.4 19.008 19.008 0 0016.41 16.41 2.56 2.56 0 00.39 0 2.993 2.993 0 003-3v-3a3 3 0 00-2.42-2.92zm.49 6a1.005 1.005 0 01-1.15.99 17.16 17.16 0 01-9.87-4.84 17.16 17.16 0 01-4.88-9.9 1.005 1.005 0 011-1.15h3a1 1 0 011 .78 3.935 3.935 0 00.15.82 11 11 0 00.46 1.54l-1.4.66a1.042 1.042 0 00-.52 1.32 14.49 14.49 0 007 7 1.042 1.042 0 001.32-.52l.63-1.4a12.41 12.41 0 001.58.46c.26.06.54.11.81.15a1 1 0 01.78 1zm-5.9-17h-.7a1.004 1.004 0 10.17 2h.53a6 6 0 016 6v.53a1 1 0 00.91 1.08h.08a1 1 0 001-.91v-.7a8 8 0 00-7.99-8zm2 8a1 1 0 002 0 4 4 0 00-4-4 1 1 0 000 2 2 2 0 012 2z"
        fill="current"
      />
    </svg>
  );
};

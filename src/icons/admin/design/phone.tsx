import { FC } from 'react';

export const ICPhone: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      className={className}
      onClick={onClick}
    >
      <path data-name="Rectangle 37" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="phone"
        d="M19.458 14.39a3.147 3.147 0 01-.67-.12 9.44 9.44 0 01-1.31-.39 2 2 0 00-2.48 1l-.22.45a12.18 12.18 0 01-2.66-2 12.18 12.18 0 01-2-2.66l.42-.28a2 2 0 001-2.48 10.33 10.33 0 01-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 00-3-2.49h-3a3 3 0 00-3 3.41 19 19 0 0016.52 16.46h.38a2.993 2.993 0 003-3.01v-3a3 3 0 00-2.47-2.9zm.5 6a1 1 0 01-.34.75 1.05 1.05 0 01-.82.25A17 17 0 014.088 6.61a1.09 1.09 0 01.25-.82 1 1 0 01.75-.34h3a1 1 0 011 .79q.06.41.15.81a11.12 11.12 0 00.46 1.55l-1.4.65a1 1 0 00-.49 1.33 14.49 14.49 0 007 7 1.059 1.059 0 001.33-.52l.62-1.4a13.69 13.69 0 001.58.46q.4.09.81.15a1 1 0 01.79 1z"
        fill={fill ? fill : 'current'}
      />
    </svg>
  );
};

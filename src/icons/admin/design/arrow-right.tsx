import { IIcon } from 'icons/interfaces';
import { FC } from 'react';

export const ICArrowRight: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11.995"
      height="12.01"
      viewBox="0 0 11.995 12.01"
      className={className}
      onClick={onClick}
    >
      <path
        fill='#fff'
        d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 1 0 1.42 1.42l5-5a1.034 1.034 0 0 0 .21-1.09z"
        transform="translate(-6 -5.996)"
      />
    </svg>
  );
};

import { FC } from 'react';
import { IIcon } from '../../interfaces';

export const ICCropAlt: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 378 1009"
      className={className}
    >
      <path fill="#2e323d" d="M0 0H378V1009H0z" />
    </svg>
  );
};

import { FC } from 'react';
import { IIcon } from './interfaces';

export const ICTrash: FC<IIcon> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
    >
      <path fill="none" d="M0 0H20V20H0z" />
      <path
        fill="#b8bdca"
        d="M17.4 5.389h-3.387v-.847A2.542 2.542 0 0 0 11.472 2H9.777a2.542 2.542 0 0 0-2.541 2.542v.847H3.847a.847.847 0 0 0 0 1.694h.847V16.4a2.542 2.542 0 0 0 2.542 2.542h6.777a2.542 2.542 0 0 0 2.542-2.542V7.083h.845a.847.847 0 0 0 0-1.694zm-8.47-.847a.847.847 0 0 1 .847-.847h1.694a.847.847 0 0 1 .847.847v.847H8.93zM14.86 16.4a.847.847 0 0 1-.847.847H7.236a.847.847 0 0 1-.847-.847V7.083h8.471z"
        transform="translate(-.141 -.67)"
      />
    </svg>
  );
};

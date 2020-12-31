import { FC } from 'react';
import { IIcon } from './interfaces';

export const ICSetting: FC<IIcon> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <path
        fill="#9ba3b5"
        d="M10.983 15.531a.855.855 0 1 0 .855.855.855.855 0 0 0-.855-.855zM16.112 1H5.855A.855.855 0 0 0 5 1.855v7.693a2.564 2.564 0 0 0 2.564 2.564h.855v2.026a3.419 3.419 0 1 0 5.129 0v-2.026h.852a2.564 2.564 0 0 0 2.564-2.564V1.855A.855.855 0 0 0 16.112 1zm-5.129 17.1a1.71 1.71 0 0 1-1.137-2.975.855.855 0 0 0 .282-.633v-2.38h1.71v2.376a.855.855 0 0 0 .282.633 1.71 1.71 0 0 1-1.137 2.979zm4.274-8.548a.855.855 0 0 1-.855.855H7.564a.855.855 0 0 1-.855-.855v-.859h8.548zm0-2.564H6.71V2.71h8.548z"
        transform="translate(1.001 2)"
      />
    </svg>
  );
};

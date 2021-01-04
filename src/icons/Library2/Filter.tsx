import * as React from 'react';

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 38" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="filter"
        d="M18.489 1.857h-14a3 3 0 00-3 3v1.17a3 3 0 00.25 1.2v.06a2.81 2.81 0 00.59.86l6.16 6.12v6.59a1 1 0 001.45.89l4-2a1 1 0 00.55-.89v-4.59l6.12-6.12a2.81 2.81 0 00.59-.86v-.06a3 3 0 00.29-1.2v-1.17a3 3 0 00-3-3zm-5.71 11.29a1 1 0 00-.29.71v4.38l-2 1v-5.38a1 1 0 00-.29-.71l-5.3-5.29h13.18zm6.71-7.29h-16v-1a1 1 0 011-1h14a1 1 0 011 1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgFilter;

import * as React from 'react';

function SvgInfoCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 37" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="info-circle"
        d="M11.619 11.143a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zm.38-3.92a1.034 1.034 0 00-1.09.21 1.15 1.15 0 00-.21.33.84.84 0 00-.08.38 1 1 0 00.29.71 1.15 1.15 0 00.33.21 1 1 0 001.38-.92 1.05 1.05 0 00-.29-.71 1 1 0 00-.33-.21zm-.38-5.08a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
        fill='current'
      />
    </svg>
  );
}

export default SvgInfoCircle;

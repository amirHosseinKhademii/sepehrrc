import * as React from 'react';

function SvgSmile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 40" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="smile"
        d="M14.233 14.373a3.76 3.76 0 01-4.72 0 1.001 1.001 0 00-1.28 1.54 5.68 5.68 0 007.28 0 1.001 1.001 0 10-1.28-1.54zm-5.36-3.23a1 1 0 10-1-1 1 1 0 001 1zm6-2a1 1 0 101 1 1 1 0 00-1-1zm-3-7a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
        fill='current'
      />
    </svg>
  );
}

export default SvgSmile;

import * as React from 'react';

function SvgSmileBeam(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="smile-beam"
        d="M14.48 14.373a3.76 3.76 0 01-4.72 0 1.001 1.001 0 00-1.28 1.54 5.68 5.68 0 007.28 0 1.001 1.001 0 10-1.28-1.54zm-5.15-3.69a1 1 0 001.41-1.41 3.08 3.08 0 00-4.24 0 1 1 0 101.41 1.41 1 1 0 011.42 0zm8.41-1.41a3.08 3.08 0 00-4.24 0 1 1 0 001.41 1.41 1 1 0 011.42 0 1 1 0 001.41-1.41zm-5.62-7.13a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
        fill='current'
      />
    </svg>
  );
}

export default SvgSmileBeam;

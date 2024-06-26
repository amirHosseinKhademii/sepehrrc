import * as React from 'react';

function SvgMessage(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="message"
        d="M20.193 9.172l-14-7a3 3 0 00-4.08 3.9l2.4 5.37a1.06 1.06 0 010 .82l-2.4 5.37a3 3 0 002.74 4.22 3.14 3.14 0 001.35-.32l14-7a3 3 0 000-5.36zm-.89 3.57l-14 7a1 1 0 01-1.35-1.3l2.39-5.37a2 2 0 00.08-.22h6.89a1 1 0 100-2h-6.89a2 2 0 00-.08-.22l-2.39-5.37a1 1 0 011.35-1.3l14 7a1 1 0 010 1.78z"
        fill='current'
      />
    </svg>
  );
}

export default SvgMessage;

import * as React from 'react';

function SvgQuestionCircle(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="question-circle"
        d="M11.413 15.433a1.58 1.58 0 00-.12.15.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2.84.84 0 00.08.38.9.9 0 00.54.54.94.94 0 00.76 0 .9.9 0 00.54-.54 1.009 1.009 0 00-1.65-1.09zm.71-13.29a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8zm0-13a3 3 0 00-2.6 1.5 1 1 0 101.73 1 1 1 0 11.87 1.5 1 1 0 00-1 1v1a1 1 0 002 0v-.18a3 3 0 00-1-5.82z"
        fill='current'
      />
    </svg>
  );
}

export default SvgQuestionCircle;

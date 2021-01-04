import * as React from 'react';

function SvgArrowCircleRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 34" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="arrow-circle-right"
        d="M15.579 13.14a1.034 1.034 0 000-1.42l-3-3a1.004 1.004 0 00-1.42 1.42l1.3 1.29h-3.59a1 1 0 000 2h3.59l-1.3 1.29a1.004 1.004 0 101.42 1.42zm6.29-.71a10 10 0 10-10 10 10 10 0 0010-10zm-18 0a8 8 0 118 8 8 8 0 01-8-8z"
        fill='current'
      />
    </svg>
  );
}

export default SvgArrowCircleRight;

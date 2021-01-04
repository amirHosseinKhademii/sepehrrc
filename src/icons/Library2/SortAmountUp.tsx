import * as React from 'react';

function SvgSortAmountUp(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="sort-amount-up"
        d="M5.642 6.433a1.034 1.034 0 00-1.42 0l-2 2a1.004 1.004 0 001.42 1.42l.29-.3v7.59a1 1 0 002 0v-7.59l.29.3a1.004 1.004 0 101.42-1.42zm5.29 1.71h10a1 1 0 000-2h-10a1 1 0 000 2zm10 8h-10a1 1 0 000 2h10a1 1 0 000-2zm0-5h-10a1 1 0 000 2h10a1 1 0 000-2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgSortAmountUp;

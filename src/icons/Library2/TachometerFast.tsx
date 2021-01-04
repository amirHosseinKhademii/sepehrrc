import * as React from 'react';

function SvgTachometerFast(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="tachometer-fast"
        d="M15.282 10.147l-2.78 2.78a2.09 2.09 0 00-.51-.07 2 2 0 00-2 2 2.09 2.09 0 00.07.51l-.78.78a1.004 1.004 0 101.42 1.42l.78-.78a2.09 2.09 0 00.51.07 2 2 0 002-2 2.09 2.09 0 00-.07-.51l2.78-2.78a1.004 1.004 0 10-1.42-1.42zm-3.29-6.29a10 10 0 00-8.31 15.56 1.001 1.001 0 001.66-1.12 8 8 0 1113.3 0 1.001 1.001 0 001.66 1.12 10 10 0 00-8.31-15.56z"
        fill='current'
      />
    </svg>
  );
}

export default SvgTachometerFast;

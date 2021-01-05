import * as React from 'react';

function SvgShieldCheck(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="shield-check"
        d="M19.119 3.791a1 1 0 00-.84-.2 8 8 0 01-6.22-1.27 1 1 0 00-1.14 0 8 8 0 01-6.22 1.27 1 1 0 00-1.21.98v7.45a9 9 0 003.77 7.33l3.65 2.6a1 1 0 001.16 0l3.65-2.6a9 9 0 003.77-7.33v-7.45a1 1 0 00-.37-.78zm-1.63 8.23a7 7 0 01-2.93 5.7l-3.07 2.19-3.07-2.19a7 7 0 01-2.93-5.7v-6.3a10 10 0 006-1.39 10 10 0 006 1.39zm-4.46-2.29l-2.69 2.7-.89-.9a1.004 1.004 0 00-1.42 1.42l1.6 1.6a1 1 0 001.42 0l3.44-3.41a1.004 1.004 0 10-1.42-1.42z"
        fill='current'
      />
    </svg>
  );
}

export default SvgShieldCheck;

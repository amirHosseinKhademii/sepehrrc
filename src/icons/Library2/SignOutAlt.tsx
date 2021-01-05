import * as React from 'react';

function SvgSignOutAlt(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="sign-out-alt"
        d="M12.079 13.43l-2.3 2.29a1.004 1.004 0 101.42 1.42l4-4a1.034 1.034 0 000-1.42l-4-4a1.004 1.004 0 00-1.42 1.42l2.3 2.29h-9.59a1 1 0 000 2zm-.59-11a10 10 0 00-9 5.55 1.006 1.006 0 001.8.9 8.041 8.041 0 11.04 7.1 1.006 1.006 0 00-1.8.9 10 10 0 108.96-14.45z"
        fill='current'
      />
    </svg>
  );
}

export default SvgSignOutAlt;

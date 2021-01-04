import * as React from 'react';

function SvgUserCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 22" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="user-circle"
        d="M11.85 2.143a10 10 0 00-7.35 16.76 10 10 0 0014.7 0 10 10 0 00-7.35-16.76zm0 18a8 8 0 01-5.55-2.25 6 6 0 0111.1 0 8 8 0 01-5.55 2.25zm-2-10a2 2 0 112 2 2 2 0 01-2-2zm8.91 6a8 8 0 00-3.91-3.38 4 4 0 10-6 0 8 8 0 00-3.91 3.38 7.92 7.92 0 01-1.09-4 8 8 0 1116 0 7.92 7.92 0 01-1.09 4z"
        fill='current'
      />
    </svg>
  );
}

export default SvgUserCircle;

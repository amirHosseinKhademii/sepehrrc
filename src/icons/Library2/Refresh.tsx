import * as React from 'react';

function SvgRefresh(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="refresh"
        d="M19.904 15.367h-4.53a1 1 0 000 2h2.4a8 8 0 01-13.78-5.51 1 1 0 10-2 0 10 10 0 0016.88 7.23v1.77a1 1 0 002 0v-4.5a1 1 0 00-.97-.99zm-4.91-3.51a3 3 0 10-3 3 3 3 0 003-3zm-4 0a1 1 0 111 1 1 1 0 01-1-1zm1-10a10 10 0 00-6.88 2.77v-1.77a1 1 0 00-2 0v4.5a1 1 0 001 1h4.5a1 1 0 000-2h-2.4a8 8 0 0113.78 5.5 1 1 0 002 0 10 10 0 00-10-10z"
        fill='current'
      />
    </svg>
  );
}

export default SvgRefresh;

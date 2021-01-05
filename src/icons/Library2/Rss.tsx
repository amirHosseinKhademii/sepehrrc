import * as React from 'react';

function SvgRss(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="rss"
        d="M3.751 15.737a3 3 0 104.24 4.24 3 3 0 00-4.24-4.24zm2.83 2.83a1 1 0 11.3-.71 1 1 0 01-.3.71zm-.71-7.71a1 1 0 000 2 5 5 0 015 5 1 1 0 002 0 7 7 0 00-7-7zm0-4a1 1 0 000 2 9 9 0 019 9 1 1 0 002 0 11.08 11.08 0 00-3.22-7.78 11.08 11.08 0 00-7.78-3.22zm10.61.39a15.11 15.11 0 00-10.61-4.39 1 1 0 100 2 13 13 0 0113 13 1 1 0 002 0 15.11 15.11 0 00-4.39-10.61z"
        fill='current'
      />
    </svg>
  );
}

export default SvgRss;

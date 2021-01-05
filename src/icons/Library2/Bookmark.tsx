import * as React from 'react';

function SvgBookmark(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="bookmark"
        d="M15.873 1.57h-8a3 3 0 00-3 3v16a1 1 0 001.5.87l5.5-3.18 5.5 3.18a1 1 0 001.5-.87v-16a3 3 0 00-3-3zm1 17.27l-4.5-2.6a1 1 0 00-1 0l-4.5 2.6V4.57a1 1 0 011-1h8a1 1 0 011 1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgBookmark;

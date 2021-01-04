import * as React from 'react';

function SvgUpload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 21" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="upload"
        d="M8.704 8.135l2.29-2.3v9.59a1 1 0 002 0v-9.59l2.29 2.3a1.004 1.004 0 101.42-1.42l-4-4a1.034 1.034 0 00-1.42 0l-4 4a1.004 1.004 0 001.42 1.42zm12.29 4.29a1 1 0 00-1 1v6a1 1 0 01-1 1h-14a1 1 0 01-1-1v-6a1 1 0 00-2 0v6a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgUpload;

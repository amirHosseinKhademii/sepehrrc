import * as React from 'react';

function SvgHeadphones(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 38" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="headphones"
        d="M12.413 3.43a10 10 0 00-10 10v7a1 1 0 001 1h3a3 3 0 003-3v-2a3 3 0 00-3-3h-2a8 8 0 0116 0h-2a3 3 0 00-3 3v2a3 3 0 003 3h3a1 1 0 001-1v-7a10 10 0 00-10-10zm-6 12a1 1 0 011 1v2a1 1 0 01-1 1h-2v-4zm14 4h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgHeadphones;

import * as React from 'react';

function SvgPlayCircle(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="play-circle"
        d="M16.498 10.413l-5-2.89a2 2 0 00-3 1.73v5.78a2 2 0 003 1.73l5-2.89a2 2 0 000-3.46zm-1 1.73l-5 2.89v-5.78zm-3-10a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8z"
        fill='current'
      />
    </svg>
  );
}

export default SvgPlayCircle;

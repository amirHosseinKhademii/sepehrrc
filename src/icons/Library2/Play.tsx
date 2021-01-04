import * as React from 'react';

function SvgPlay(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="play"
        d="M18.78 8.856l-9.66-5.54a3.42 3.42 0 00-5.13 3v11.12a3.418 3.418 0 005.13 2.96l9.66-5.54a3.42 3.42 0 000-5.92zm-1 4.19l-9.66 5.62a1.44 1.44 0 01-1.42 0 1.42 1.42 0 01-.71-1.23V6.276a1.42 1.42 0 01.71-1.23 1.51 1.51 0 01.71-.19 1.54 1.54 0 01.71.19l9.66 5.58a1.42 1.42 0 010 2.46z"
        fill='current'
      />
    </svg>
  );
}

export default SvgPlay;

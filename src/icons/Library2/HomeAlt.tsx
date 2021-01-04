import * as React from 'react';

function SvgHomeAlt(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="home-alt"
        d="M19.737 8.454l-6-5.26a3 3 0 00-4 0l-6 5.26a3 3 0 00-1 2.26v8.74a3 3 0 003 3h12a3 3 0 003-3v-8.75a3 3 0 00-1-2.25zm-6 12h-4v-5a1 1 0 011-1h2a1 1 0 011 1zm5-1a1 1 0 01-1 1h-2v-5a3 3 0 00-3-3h-2a3 3 0 00-3 3v5h-2a1 1 0 01-1-1v-8.75a1 1 0 01.34-.75l6-5.25a1 1 0 011.32 0l6 5.25a1 1 0 01.34.75z"
        fill='current'
      />
    </svg>
  );
}

export default SvgHomeAlt;

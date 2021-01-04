import * as React from 'react';

function SvgMegaphone(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="megaphone"
        d="M20.123 1.568a1 1 0 00-1 1v.637a9.036 9.036 0 01-7 3.363h-6a3 3 0 00-3 3v2a3 3 0 003 3h.484l-2.4 5.606a1 1 0 00.916 1.394h4a1 1 0 00.919-.6l2.724-6.356a9.028 9.028 0 016.357 3.325v.631a1 1 0 002 0v-16a1 1 0 00-1-1zm-14 11a1 1 0 01-1-1v-2a1 1 0 011-1h1v4zm2.341 7H6.64l2.142-5h1.824zm10.659-4.478a11.052 11.052 0 00-7-2.522h-3v-4h3a11.053 11.053 0 007-2.522z"
        fill='current'
      />
    </svg>
  );
}

export default SvgMegaphone;

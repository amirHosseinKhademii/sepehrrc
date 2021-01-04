import * as React from 'react';

function SvgShoppingBag(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="shopping-bag"
        d="M18.869 6.857h-3v-1a4 4 0 00-8 0v1h-3a1 1 0 00-1 1v11a3 3 0 003 3h10a3 3 0 003-3v-11a1 1 0 00-1-1zm-9-1a2 2 0 014 0v1h-4zm8 13a1 1 0 01-1 1h-10a1 1 0 01-1-1v-10h2v1a1 1 0 002 0v-1h4v1a1 1 0 002 0v-1h2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgShoppingBag;

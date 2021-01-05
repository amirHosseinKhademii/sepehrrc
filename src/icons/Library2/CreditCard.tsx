import * as React from 'react';

function SvgCreditCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 41" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="credit-card"
        d="M6.854 14.57h3a1 1 0 000-2h-3a1 1 0 000 2zm12-10h-14a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3v-9a3 3 0 00-3-3zm1 12a1 1 0 01-1 1h-14a1 1 0 01-1-1v-6h16zm0-8h-16v-1a1 1 0 011-1h14a1 1 0 011 1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgCreditCard;

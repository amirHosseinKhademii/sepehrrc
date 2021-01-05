import * as React from 'react';

function SvgEnvelope(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path data-name="Rectangle 40" fill="none" d="M0 0h24v24H0z" />
      <path
        data-name="envelope"
        d="M19 3.857H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm-.41 2l-5.88 5.88a1 1 0 01-1.42 0l-5.88-5.88zm1.41 11a1 1 0 01-1 1H5a1 1 0 01-1-1v-9.59l5.88 5.88a3 3 0 004.24 0L20 7.267z"
        fill='current'
      />
    </svg>
  );
}

export default SvgEnvelope;

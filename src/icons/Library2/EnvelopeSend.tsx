import * as React from 'react';

function SvgEnvelopeSend(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="envelope-send"
        d="M15.928 9.861h-8a3 3 0 00-3 3v5a3 3 0 003 3h8a3 3 0 003-3v-5a3 3 0 00-3-3zm-.42 2l-2.88 2.88a1 1 0 01-1.4 0l-2.88-2.88zm1.42 6a1 1 0 01-1 1h-8a1 1 0 01-1-1v-4.59l2.88 2.87a2.94 2.94 0 002.12.89 3 3 0 002.12-.88l2.88-2.88zm-8-12h3.59l-.3.29a1.004 1.004 0 101.42 1.42l2-2a1.034 1.034 0 000-1.42l-2-2a1.004 1.004 0 00-1.42 1.42l.3.29h-3.59a1 1 0 000 2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgEnvelopeSend;

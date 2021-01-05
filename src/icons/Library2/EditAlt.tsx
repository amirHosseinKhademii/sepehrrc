import * as React from 'react';

function SvgEditAlt(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="edit-alt"
        d="M5.12 17.576h4.24a1 1 0 00.71-.29l6.92-6.93 2.84-2.78a1 1 0 000-1.42l-4.24-4.29a1 1 0 00-1.42 0l-2.82 2.83-6.94 6.93a1 1 0 00-.29.71v4.24a1 1 0 001 1zm9.76-13.59l2.83 2.83-1.42 1.42-2.83-2.83zm-8.76 8.76l5.93-5.93 2.83 2.83-5.93 5.93H6.12zm15 6.83h-18a1 1 0 000 2h18a1 1 0 000-2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgEditAlt;

import * as React from 'react';

function SvgPaperclip(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="paperclip"
        d="M18.008 13.541l-6.18 6.19a4.25 4.25 0 01-6-6l8-8a2.57 2.57 0 013.54 0 2.52 2.52 0 010 3.54l-6.9 6.89a.764.764 0 01-1.12-1.04l5.13-5.12a1.004 1.004 0 10-1.42-1.42l-5.13 5.14a2.74 2.74 0 000 3.89 2.82 2.82 0 003.89 0l6.89-6.9a4.5 4.5 0 00-6.36-6.36l-8 8a6.25 6.25 0 008.89 8.77l6.19-6.18a1.004 1.004 0 10-1.42-1.42z"
        fill='current'
      />
    </svg>
  );
}

export default SvgPaperclip;

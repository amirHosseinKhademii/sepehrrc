import * as React from 'react';

function SvgHeart(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="heart"
        d="M19.661 4.45a6.29 6.29 0 00-8.16-.64 6.27 6.27 0 00-8.16 9.48l6.21 6.22a2.78 2.78 0 003.9 0l6.21-6.22a6.27 6.27 0 000-8.84zm-1.41 7.46l-6.21 6.21a.76.76 0 01-1.08 0l-6.21-6.24a4.243 4.243 0 116-6 1 1 0 001.42 0 4.271 4.271 0 016.08 6z"
        fill='current'
      />
    </svg>
  );
}

export default SvgHeart;

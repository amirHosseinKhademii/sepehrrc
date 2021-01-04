import * as React from 'react';

function SvgLocationPinAlt(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="location-pin-alt"
        d="M12.74 10.64a2 2 0 10-2-2 2 2 0 002 2zm-.71 6.91a1 1 0 001.42 0l4.09-4.1a6.79 6.79 0 10-9.6 0zM7.97 8.18a4.792 4.792 0 118.16 3.86l-3.39 3.39-3.39-3.39a4.77 4.77 0 01-1.38-3.86zm11.77 11.66h-14a1 1 0 000 2h14a1 1 0 000-2z"
        fill='current'
      />
    </svg>
  );
}

export default SvgLocationPinAlt;

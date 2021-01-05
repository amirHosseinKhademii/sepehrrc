import * as React from 'react';

function SvgCommentInfoAlt(props: React.SVGProps<SVGSVGElement>) {
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
        data-name="comment-info-alt"
        d="M11.994 9.142a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zm7-7h-14a3 3 0 00-3 3v10a3 3 0 003 3h11.59l3.7 3.71a1 1 0 00.71.29.84.84 0 00.38-.08 1 1 0 00.62-.92v-16a3 3 0 00-3-3zm1 16.59l-2.29-2.3a1 1 0 00-.71-.29h-12a1 1 0 01-1-1v-10a1 1 0 011-1h14a1 1 0 011 1zm-8-12.59a1 1 0 101 1 1 1 0 00-1-1z"
        fill='current'
      />
    </svg>
  );
}

export default SvgCommentInfoAlt;

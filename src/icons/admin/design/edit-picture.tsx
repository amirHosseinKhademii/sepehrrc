import { FC } from 'react';

export const ICEditPicture: FC<IIcon> = ({
  className,
  onClick,
  height,
  width,
  fill,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '1em'}
      height={height ? height : '1em'}
      viewBox="0 0 16 15.2"
      className={className}
      onClick={onClick}
    >
      <path
        fill={fill ? fill : 'current'}
        d="M6.4 17.7a2.817 2.817 0 0 1-2.684-2H2v-1.6h1.716A2.8 2.8 0 1 1 6.4 17.7zm0-4a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2zm11.6 2h-8v-1.6h8zm-4.4-2.8a2.8 2.8 0 1 1 2.684-3.6H18v1.6h-1.716a2.817 2.817 0 0 1-2.684 2zm0-4a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2zm-3.6 2H2V9.3h8zM8 8.1a2.8 2.8 0 1 1 2.684-3.6H18v1.6h-7.316A2.818 2.818 0 0 1 8 8.1zm0-4a1.2 1.2 0 1 0 1.2 1.262V5.3A1.2 1.2 0 0 0 8 4.1zm-3.6 2H2V4.5h2.4z"
        transform="translate(-2 -2.5)"
      />
    </svg>
  );
};

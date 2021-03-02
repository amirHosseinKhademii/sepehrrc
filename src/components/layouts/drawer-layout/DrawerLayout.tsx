import { useDesign, useDirection } from 'hooks';
import { FC } from 'react';

export const DrawerLayout: FC<{ children?: any; withOpacity?: boolean }> = ({
  children,
  withOpacity,
}) => {
  const { marginRtl, rightTL } = useDirection();

  const { designState } = useDesign();
  return (
    <div
      className={` w-310px h-full fixed top-0 
     ${rightTL}-0 ${marginRtl}-68px   bg-gray_shade-900  pt-13px z-50  overflow-auto ${
        withOpacity && 'opacity-60'
      } `}
    >
      {children}
    </div>
  );
};

import { useDesign } from 'hooks';
import { FC } from 'react';

export const DrawerLayout: FC<{ children?: any; withOpacity?: boolean }> = ({
  children,
  withOpacity,
}) => {
  const { designState } = useDesign();
  const { direction } = designState.pageSettings;
  return (
    <div
      className={` w-310px h-full fixed top-0 ${
        direction === 'rtl' ? 'right-0 mr-68px' : 'left-0 ml-68px'
      }  bg-gray_shade-900  pt-13px z-50  overflow-auto ${
        withOpacity && 'opacity-60'
      } `}
    >
      {children}
    </div>
  );
};

import { useDesign } from 'hooks';
export const DrawerLayout = ({ children }) => {
  const { designState } = useDesign();
  const { direction } = designState.pageSettings;
  return (
    <div
      className={` w-310px h-full fixed top-0 ${
        direction === 'rtl' ? 'right-0 mr-68px' : 'left-0 ml-68px'
      }  bg-gray_shade-900  pt-13px z-50  overflow-auto `}
    >
      {children}
    </div>
  );
};

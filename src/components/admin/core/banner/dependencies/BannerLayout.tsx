import { useClass } from 'hooks';
import { useUi } from 'hooks';

export const BannerLayout = ({ children, className, onClick }) => {
  const { uiState } = useUi();
  const { join } = useClass();

  return (
    <div
      className={`${
        uiState.drawer.style
          ? 'relative pt-12 pb-8 border-t-2 border-b-2 border-dashed border-opacity-70 border-primary-700'
          : 'pt-12 cursor-pointer'
      }`}
      onClick={onClick}
    >
      <div className={join('grid w-5/6 h-full mx-auto gap-x-20px', className)}>
        {children}
      </div>
      <div
        className={`${
          uiState.drawer.style
            ? 'absolute top-0 left-0 opacity-10 w-full h-full bg-primary-700'
            : 'hidden'
        }`}
      ></div>
    </div>
  );
};

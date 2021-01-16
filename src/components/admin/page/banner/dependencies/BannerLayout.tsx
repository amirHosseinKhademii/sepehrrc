import { useClass, useDesign } from 'hooks';

export const BannerLayout = ({ children, className, onClick, item }) => {
  const { join, toggle } = useClass();
  const { designState } = useDesign();

  return (
    <div
      className={toggle(
        'pt-12',
        'relative pt-12 pb-8 border-t-2 border-b-2 border-dashed border-opacity-70 border-primary-700',
        designState.current.type == 'banner' &&
          item.uuid == designState.current.uuid
      )}
      // onClick={onClick}
    >
      <div className={join('grid w-5/6 h-full mx-auto gap-x-20px', className)}>
        {children}
      </div>
      <div
        className={toggle(
          '',
          'absolute top-0 left-0 opacity-10 w-full h-full bg-primary-700',
          designState.current.type == 'banner' &&
            item.uuid == designState.current.uuid,
          'hidden'
        )}
      ></div>
    </div>
  );
};

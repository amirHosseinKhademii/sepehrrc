import { useClass, useDirection } from 'hooks';

export const BannerLayout = ({ children, className }) => {
  const { join } = useClass();
  const { dirRtl } = useDirection();

  return (
    <div
      className={join(
        'grid gap-x-20px h-full container mx-auto px-20px',
        className
      )}
      dir={dirRtl}
    >
      {children}
    </div>
  );
};

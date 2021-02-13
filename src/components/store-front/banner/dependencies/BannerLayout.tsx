import { useClass } from 'hooks';

export const BannerLayout = ({ children, className }) => {
  const { join } = useClass();

  return (
    <div
      className={join(
        'grid gap-x-20px h-full container mx-auto px-20px',
        className
      )}
    >
      {children}
    </div>
  );
};

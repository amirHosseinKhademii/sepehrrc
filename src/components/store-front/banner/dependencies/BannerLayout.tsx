import { useClass } from 'hooks';

export const BannerLayout = ({ children, className }) => {
  const { join } = useClass();

  return (
    <div
      className={join(
        'banner grid gap-x-20px h-full container mx-auto px-20px py-25px my-25px ',
        className
      )}
    >
      {children}
    </div>
  );
};

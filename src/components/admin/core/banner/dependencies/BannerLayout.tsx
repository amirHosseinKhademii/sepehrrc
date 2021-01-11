import { useClass } from 'hooks';

export const BannerLayout = ({ children, className }) => {
  const { join } = useClass();
  return (
    <div className={join('grid w-5/6 h-full mx-auto gap-x-20px', className)}>
      {children}
    </div>
  );
};

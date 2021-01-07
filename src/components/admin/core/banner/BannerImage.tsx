import { useClass } from 'hooks';
export const BannerImage = ({ className, number }) => {
  const { join } = useClass();
  return (
    <div
      className={join(
        ' flex items-center justify-center bg-gray-300 rounded ',
        className
      )}
    >
      <span className="text-white text-14px">{number}</span>
    </div>
  );
};

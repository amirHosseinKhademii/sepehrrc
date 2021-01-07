import { useClass } from 'hooks';
import { FC } from 'react';
import { IBanner } from './interfaces';
export const BannerImage: FC<IBanner> = ({ className, number, item }) => {
  const { join } = useClass();
  if (item.images && item.images[0])
    return (
      <img
        className=" object-cover object-center  rounded"
        src={item.images[0]}
      />
    );
  else
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

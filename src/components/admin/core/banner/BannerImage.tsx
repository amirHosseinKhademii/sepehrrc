import { useClass } from 'hooks';
import { FC } from 'react';
import { IBanner } from './interfaces';

export const BannerImage: FC<IBanner> = ({ className, number, item }) => {
  const { join } = useClass();

  if (item.images && item.images[number])
    return (
      <img
        className={join('w-full rounded object-cover object-center', className)}
        src={item.images[number]}
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

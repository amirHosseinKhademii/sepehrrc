import { useClass } from 'hooks';
import { FC } from 'react';
import { IBanner } from '../interfaces';
import Link from 'next/link';

export const BannerImage: FC<IBanner> = ({ className, number, item }) => {
  const { join } = useClass();
  const itemImage = item.images.find((img) => img.number == number);

  if (item.images && itemImage)
    return (
      <Link href={itemImage.link}>
        <a target={itemImage.newTab ? '_blank' : ''}>
          <img
            className={join(
              'w-full rounded object-cover object-center',
              className
            )}
            src={itemImage.value}
          />
        </a>
      </Link>
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

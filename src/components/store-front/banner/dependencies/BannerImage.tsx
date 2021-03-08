import { useClass } from 'hooks';
import { FC } from 'react';
import Link from 'next/link';

export const BannerImage: FC<IBanner> = ({
  className,
  number,
  item,
  layout,
}) => {
  const { join } = useClass();
  const itemImage = item.images.find((img) => img.number == number);
  const imgAlt = '/assets/images/default.png';

  if (item.images && itemImage)
    return (
      <Link href={itemImage.link ? itemImage.link : ''}>
        <a target={itemImage.newTab ? '_blank' : ''}>
          <img
            className={join(
              'w-full rounded object-fill object-center',
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
          ' flex items-center justify-center bg-white rounded ',
          className
        )}
      >
        <img
          className={'w-145px h-107px rounded object-contain object-center'}
          src={imgAlt}
        />
      </div>
    );
};

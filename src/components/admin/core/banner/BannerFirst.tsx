import { FC } from 'react';
import { BannerImage } from './BannerImage';
import { BannerLayout } from './BannerLayout';
import { IBanner } from './interfaces';

export const BannerFirst: FC<IBanner> = ({ item }) => {
  return (
    <BannerLayout className="grid-cols-3">
      <div className="grid grid-cols-1 col-span-1 gap-y-20px h-full">
        <BannerImage className=" h-full" number="2" item={item} />
        <BannerImage className="h-full" number="3" item={item} />
      </div>
      <div className="col-span-2">
        <BannerImage className="h-full" number="1" item={item} />
      </div>
    </BannerLayout>
  );
};

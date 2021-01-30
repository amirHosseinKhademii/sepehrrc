import { FC } from 'react';
import { BannerImage, BannerLayout } from './dependencies';

export const BannerFifth: FC<IBanner> = ({ item }) => {
  return (
    <BannerLayout className="grid-cols-2">
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="two" item={item} />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage className="h-211px" number="one" item={item} />
      </div>
    </BannerLayout>
  );
};

import { FC } from 'react';
import { BannerImage, BannerLayout } from './dependencies';

const BannerFifth: FC<IBanner> = ({ item, layout }) => {
  return (
    <BannerLayout className="grid-cols-2">
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage
          className="h-211px"
          number="one"
          item={item}
          layout={layout}
        />
      </div>
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage
          className="h-211px"
          number="two"
          item={item}
          layout={layout}
        />
      </div>
    </BannerLayout>
  );
};

export default BannerFifth;

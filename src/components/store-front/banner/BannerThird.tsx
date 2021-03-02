import { FC } from 'react';
import { BannerImage, BannerLayout } from './dependencies';

const BannerThird: FC<IBanner> = ({ item, onClick, layout }) => {
  return (
    <BannerLayout className="grid-cols-3">
      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage
          className="h-211px"
          number="one"
          item={item}
          layout={layout}
        />
        <BannerImage
          className="h-211px"
          number="four"
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
        <BannerImage
          className="h-211px"
          number="five"
          item={item}
          layout={layout}
        />
      </div>

      <div className="grid grid-cols-1 col-span-1 gap-y-15px h-full">
        <BannerImage
          className="h-211px"
          number="three"
          item={item}
          layout={layout}
        />
        <BannerImage
          className="h-211px"
          number="six"
          item={item}
          layout={layout}
        />
      </div>
    </BannerLayout>
  );
};

export default BannerThird;
